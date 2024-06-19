import { useEffect, useState } from 'react'

import Filter from './components/filter'
import PersonForm from './components/person-form'
import Persons from './components/persons'
import { getAll, create, update, deleteEntry } from '../services/persons'
import Notification from './components/notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({
    message: '', isError: false, show: false
  })

  useEffect(() => {
    getAll()
      .then((data) => setPersons(data))
      .catch(err => alert(err))
  }, [])

  const handleNotification = (message, isError) => {
    setNotification({ message, isError, show: true })
  }

  const addPerson = (e) => {
    e.preventDefault()

    const exists = persons.find(({ name }) => name === newName)

    if (exists) {
      const confirmReplace = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)

      if (confirmReplace) {
        const res = update({ ...exists, number: newPhoneNumber })
          .then((data) =>
            setPersons((prev) => {
              const copy = [...prev]
              const index = copy.findIndex((el) => el.id === exists.id)
              copy[index] = data
              return [...copy]
            })
          )
          .catch(() => {
            handleNotification('An error has occurred when trying to update the phonebook information, try again.', true)
            return false
          })
        if (res === false) return
      }
    } else {
      const res = create({ name: newName, number: newPhoneNumber })
        .then((data) =>
          setPersons((prev) => [...prev, { ...data }]
          ))
        .catch(() => {
          handleNotification('An error has occurred when trying to create the phonebook information, try again.', true)
          return false
        })
      if (res === false) return
    }

    handleNotification(`Added ${newName}`, false)
    setNewName('')
    setNewPhoneNumber('')
  }

  const deletePerson = (name, id) => {
    const confirmDeletion = window.confirm(`Delete ${name} ?`)
    if (confirmDeletion) {
      deleteEntry(id)
        .then((status) => {
          if (status >= 200 || status <= 299) {
            handleNotification(`Phonebook of ${name} deleted successfully`, false)
          }
        })
        .catch(() =>
          handleNotification(`Information of ${name} has already been removed from the server`, true)
        )
      setPersons((prev) => {
        return prev.filter((el) => el.id !== id)
      })
    }
  }

  const filteredPersons = !filter
    ? persons
    : persons.filter(({ name }) => (name.toLowerCase().includes(filter)))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <Filter
        filter={filter}
        handleFilter={(e) => setFilter(e.target.value.toLowerCase())}
      />
      <br />
      <h3>Add a new person</h3>
      <PersonForm
        addPerson={addPerson}
        name={newName}
        handleName={(e) => setNewName(e.target.value)}
        number={newPhoneNumber}
        handleNumber={(e) => setNewPhoneNumber(e.target.value)}
      />
      <h3>Numbers</h3>
      <Persons data={filteredPersons} handleDelete={deletePerson}/>
    </div>
  )
}

export default App

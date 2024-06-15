import { useState } from 'react'
import Filter from './components/filter'
import PersonForm from './components/person-form'
import Persons from './components/persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const exists = persons.find(({name}) => name === newName)

    if(exists) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    setPersons((prev) => [...prev, { name: newName, number: newPhoneNumber }])

    setNewName('')
    setNewPhoneNumber('')
  }

  const filteredPersons = !filter 
    ? persons 
    : persons.filter(({ name }) => (name.toLowerCase().startsWith(filter)))

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Persons data={filteredPersons} />
    </div>
  )
}

export default App

      




import express, { json } from 'express'
import cors from 'cors'
import morgan from 'morgan'

const BASE_URL = '/api/persons'

const app = express()
app.use(cors())
app.use(json())
app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens['response-time'](req, res), 'ms',
      JSON.stringify(req.body)
    ].join(' ')
  })
)

const persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456'
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523'
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345'
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122'
  }
]

const findPersonById = (idToSearch, res) => {
  const person = persons.find(({ id }) => id === idToSearch)

  if (!person) {
    res.status(400).json({
      error: 'Person not found'
    })
  }

  return person
}

const checkCreateDTO = ({ name, number }) => {
  const errors = []

  if (!name) {
    errors.push('The name is required.')
  }

  if (!number) {
    errors.push('The number is required.')
  }
  if (persons.find((p) => p.name === name)) {
    errors.push('name must be unique')
  }

  return errors
}

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>')
})

app.get(BASE_URL, (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  const length = persons.length

  res.send(
    `
      <span>Phonebook has info for ${length} people</span>
      <br />
      <br />
      <span>${new Date().toString()}</span>

    `
  )
})

app.get(`${BASE_URL}/:id`, (req, res) => {
  const reqId = Number(req.params.id)

  const person = findPersonById(reqId, res)

  res.json(person)
})

app.delete(`${BASE_URL}/:id`, (req, res) => {
  const reqId = Number(req.params.id)

  const person = findPersonById(reqId, res)

  const personIndex = persons.findIndex(({ id }) => id === person.id)

  persons.splice(personIndex, 1)

  res.json(person)
})

app.post(BASE_URL, (req, res) => {
  const body = req.body

  const errors = checkCreateDTO(body)

  if (errors.length > 0) {
    return res.status(400).json({
      errors
    })
  }

  const id = Math.floor(Math.random() * new Date().getTime())
  const newPerson = { ...body, id }

  persons.push(newPerson)

  res.json(newPerson)
})

const PORT = 3001

app.listen(PORT, () => (
  console.log(`Server running on port ${PORT}`)
))

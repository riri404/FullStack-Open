

const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is HARD",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

//defines an event handler that is used to handle HTTP GET requests made to the application's / root
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//event handler that handles HTTP GET requests made to the notes path of the application
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
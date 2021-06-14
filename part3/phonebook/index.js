const express = require('express')
const app = express()

const PORT = 3001
let persons = [
    {
        name: "Brennis",
        number: "61 998726-846",
        id: 1
    },
    {
        name: "MarMarcos",
        number: "64 98654799",
        id: 4
    }
]

app.get("/api/persons", (request, response) =>{
    response.json(persons)
})
app.get("/info",(request, response) => {
    response.send(`<div>Phonebook has info for ${persons.length} people <div>${Date()}</div>`)
})
app.get("/api/persons/:id", (request, response) =>{
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    if (person){
        response.json(person)
    }else {
        response.status(404).end()
    }
})
app.delete("/api/persons/:id",(request, response) =>{
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.listen(PORT, () => console.log("SERVER RUNNING PORT 3001"))
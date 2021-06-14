import React, {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'
import Message from './components/Message'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [filterPar, setFilterPar] = useState("")
	const [message, setMessage] = useState("")

	const getPersons = () => {
		phonebookService.getAll().then(response => setPersons(response.data))
	}

	useEffect(getPersons,[])

	return (
		<div>
			<h2>Phonebook</h2>
			<Message message={message}/>
			<Filter setFilterPar={setFilterPar} filterPar={filterPar}/>
			<h3>Add a new</h3>
			<PersonForm newName={newName} newNumber={newNumber} persons={persons} setNewName={setNewName} setNewNumber={setNewNumber} setPersons={setPersons}  setMessage={setMessage}/>
			<h3>Numbers</h3>
			<Persons persons={persons} setPersons={setPersons} filterPar={filterPar}/>
		</div>
	)
}

export default App
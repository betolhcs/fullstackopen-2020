import React from 'react'
import phonebookService from '../services/phonebook'

const PersonForm = (props) =>{
	const changeName = (event) =>{
		props.setNewName(event.target.value) 
	}

	const changeNumber = (event) =>{
		props.setNewNumber(event.target.value) 
	}

	const addPerson = (event) =>{
		event.preventDefault()
		const newPerson = {
			name: props.newName,
			number: props.newNumber
		}
		for(let i=0;i<props.persons.length;i++){
			if (newPerson.name===props.persons[i].name){
				const id = props.persons[i].id
				if (window.confirm(newPerson.name + "is already added to the phonebook, replace the old number with a new one?")){
					phonebookService.updateNumber(id, newPerson)
					.then(response => props.setPersons(props.persons.map(person => person.id !== id ? person : response.data)))
					.catch(error => {
						props.setMessage(`Information of ${newPerson.name} has already been removed from the server`)
						props.setPersons(props.persons.filter(person => person.id !== id ))
					})
				}
				break
			}
			if (i===props.persons.length-1 && newPerson.name!==props.persons[i].name){
				phonebookService.addNew(newPerson)
				.then(response => {
					props.setPersons(props.persons.concat(response.data))
					props.setNewName("")
					props.setNewNumber("")
					props.setMessage(`Added ${newPerson.name}`)
					setTimeout(() => props.setMessage(""), 5000)
				})
				.catch(error => console.log(error))
				
			}
		}
	}

	return(
		<form onSubmit={addPerson}>
			<div>
				name: <input value={props.newName} onChange={changeName}/>
			</div>
			<div>
				number: <input value={props.newNumber} onChange={changeNumber}/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	)
}

export default PersonForm
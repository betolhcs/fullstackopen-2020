import React from 'react'
import phonebookService from '../services/phonebook'

const Persons = ({persons, filterPar, setPersons}) =>{
	const personsToShow = (persons) =>{
		if (filterPar==="") {
			return persons
		}
		else {
			let filterParUpper = filterPar.toUpperCase()
			let newlist = persons.filter((element) => element.name.toUpperCase().search(filterParUpper)>-1)
			return newlist
		}
	}

	return(
		<>
			{personsToShow(persons).map((element) => {
				return(
				<li key={element.name}>
					{element.name+"  "+element.number}
					<button onClick={() => {
						if (window.confirm(`Delete ${element.name}?`)){
							phonebookService
							.removeById(element.id)
							.then(() => setPersons(persons.filter(person => person.id!==element.id)))
							.catch(error => console.log(error))}
					}} >delete</button> </li>)})}
		</>
	)
}

export default Persons
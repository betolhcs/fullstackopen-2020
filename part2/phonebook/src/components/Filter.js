import React from 'react'

const Filter = ({filterPar , setFilterPar}) =>{
	const changeFilterPar = (event) =>{
		setFilterPar(event.target.value)
	}

	return(
		<div>filter shown with:<input value={filterPar} onChange={changeFilterPar}/></div>
	)
}

export default Filter
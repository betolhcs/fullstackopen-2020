import axios from 'axios'

const serveraddress = "http://localhost:3001/persons"

const getAll = () => axios.get(serveraddress)

const addNew = (person) => axios.post(serveraddress, person)

const removeById = (id) => axios.delete(`${serveraddress}/${id}`)

const updateNumber = (id, newNumber) => axios.put(`${serveraddress}/${id}`, newNumber) 

export default {getAll, addNew, removeById, updateNumber}
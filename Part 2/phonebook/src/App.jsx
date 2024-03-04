import { useState, useEffect } from 'react'
import Person from "./Components/person"
import Filter from "./Components/Filter"
import PersonForm from './Components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  //state to help us access new name from <input?>
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(()=>{
    console.log('Effect');
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('getting data')
      setPersons(response.data)})
  },[])

  const addPerson= (event) =>{
    event.preventDefault()

    const nameExist = persons.filter(person =>person.name === newName)
    if(nameExist.length > 0){
      window.alert(`${newName} is already in the Phone Book!`)
    }else{
    const nameObj = {
      name:newName,
      number: newNumber,
      id: persons.length+1
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewNumber('')
  }
  }

  const handleNameChange =(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange =(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter =(event) =>{
    setFilter(event.target.value)
  }

  const filtered = filter ? persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase()))
    :persons 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} 
                  newName={newName}
                  newNumber={newNumber}
                  handleNameChange={handleNameChange}
                  handleNumberChange={handleNumberChange}/>
      
      <h3>Numbers</h3>
      <ul>
            {filtered.map(person=> <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App
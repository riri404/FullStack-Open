import { useState, useEffect } from 'react'
import Person from "./Components/person"
import Filter from "./Components/Filter"
import PersonForm from './Components/PersonForm'
import personService from './services/personSend'

const App = () => {
  const [persons, setPersons] = useState([])
  //state to help us access new name from <input?>
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  
  useEffect(()=>{
    personService
    .getAll()
    .then(newResponse => {
      setPersons(newResponse)})
  },[])

  const addPerson= (event) =>{
    event.preventDefault()
    const nameObj = {
      name:newName,
      number: newNumber
    }

    const checkPerson = persons.find(person => 
      person.name.toLowerCase() === nameObj.name.toLowerCase())

    if (!checkPerson) {
      personService
        .create(nameObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
      setNewName('')
      setNewNumber('')
  

    

    // const nameExist = persons.filter(person =>person.name === newName)
    // if(nameExist.length > 0){
    //   window.alert(`${newName} is already in the Phone Book!`)
    
    

    
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
    person.name.toLowerCase().includes(filter.toLowerCase())):persons 
  
  const deletePerson =(id) => {
    const toBeDeleted = persons.filter(p=> p.id ===id)
    const deletedName= toBeDeleted[0].name
    const deletedId= toBeDeleted[0].id
    if(window.confirm(`Are you sure you want to delete ${deletedName}`)){
      personService
      .toDelete(deletedId)
      console.log(`${deletedName} successfully deleted`)
      setPersons(persons.filter(person=> person.id !== deletedId))
    }
  }

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
            {filtered.map(person=> <Person key={person.id} person={person} deletePerson={deletePerson}/>)}
      </ul>
    </div>
  )
}

export default App
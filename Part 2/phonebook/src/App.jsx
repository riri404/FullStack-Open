import { useState } from 'react'
import Person from "./Components/person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  //state to help us access new name from <input?>
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  

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
       <form>
        filter shown with <input value={filter} onChange={handleFilter}/>
       </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson} >
          name: <input value={newName} onChange={handleNameChange} /> 
          <br/> 
          number: <input valye={newNumber} onChange={handleNumberChange} />
          <br/>
          <button type="submit">add</button>
      </form>
      
      <h2>Numbers</h2>
      <ul>
            {filtered.map(person=> <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App
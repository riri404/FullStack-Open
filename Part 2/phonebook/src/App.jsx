import { useState } from 'react'
import Person from "./Components/person"

const App = () => {
  const [persons, setPersons] = useState([]) 
  //state to help us access new name from <input?>
  const [newName, setNewName] = useState('')
  

  const addPerson= (event) =>{
    event.preventDefault()

    const nameExist = persons.filter(person =>person.name === newName)
    if(nameExist.length > 0){
      window.alert(`${newName} is already in the Phone Book!`)
    }else{
    const nameObj = {
      name:newName,
      id: persons.length+1
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
  }
  }

  const handleNameChange =(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
          name: <input value={newName} onChange={handleNameChange} />
          <button type="submit">add</button>
      </form>
      
      <h2>Numbers</h2>
      <ul>
            {persons.map(person=> <Person key={person.id} person={person}/>)}
      </ul>
    </div>
  )
}

export default App
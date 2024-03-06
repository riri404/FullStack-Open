import React from "react"
import { useState,useEffect } from "react"
import Note from './components/Note'
//import axios from 'axios'
import noteService from './services/notes'
import './index.css'
import Notification from './components/Notification'
import Footer from './components/footer'


const App = () => {
  /*uses the useState function to initialize the piece 
  of state stored in notes with the array of notes
  passed in the props
  */
  const [notes, setNotes] = useState([])
  //new state to help us access the data gtabed by the <input/>
  const [newNote, setNewNote] = useState(' ')
  //stores list of nodes
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  //EFFECT HOOKS
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  


  //HTML EVENT
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      // note has 50% chasnce of being marked as importANt
      important: Math.random() < 0.5,
      //id: notes.length + 1,
    }
    noteService
    .create( noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })

    // /* method does not mutate the original notes array, but rather creates
    //  * a new copy of the array with the new item added to the end
    //  */
    // setNotes(notes.concat(noteObject))
    // /*event handler also resets the value of the controlled input element 
    //  * by calling the setNewNote. */
    // setNewNote('')
  }

  const handleNoteChange = (event) => {
    /* The target property of the event object
     * now corresponds to the controlled input element, 
     * and event.target.value refers to the input value of that element 
     */
    console.log(event.target.value)
    setNewNote(event.target.value)
    //console.log(newNote)
  }//no event.preventDefault() like  in the onSubmit, 
  //here no default action occurs on an input change, unlike a form submission.
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  const toggleImportanceOf =(id)=>{
    //finds the note we want to modify then assign note variable
    const note = notes.find(n => n.id === id)
    //copy of note except the importance is flipped
    const changedNote = { ...note, important: !note.important }

    //new note is then sent with a PUT request to the backend where it will replace the old object
    noteService.update(id, changedNote).then(returnedNote => {
      // the new array is created conditionally so that if note.id !== id is true
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })

  }
  

 
    return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
        <div>  
        <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? ' important ':' all '}
        </button>
        </div>
      <ul className='note'>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={()=> toggleImportanceOf(note.id)}/>
        )}
      </ul>
      <form onSubmit={addNote}>
       <input value={newNote} onChange={handleNoteChange}/>
       <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App

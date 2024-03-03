import React from "react"
import { useState } from "react"
import Note from './components/Note'


const App = (props) => {
  /*uses the useState function to initialize the piece 
  of state stored in notes with the array of notes
  passed in the props
  */
  const [notes, setNotes] = useState(props.notes)
  //new state to help us access the data gtabed by the <input/>
  const [newNote, setNewNote] = useState(' ')
  //stores list of nodes
  const [showAll, setShowAll] = useState(true)

  //HTML EVENT
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      // note has 50% chasnce of being marked as importANt
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    /* method does not mutate the original notes array, but rather creates
     * a new copy of the array with the new item added to the end
     */
    setNotes(notes.concat(noteObject))
    /*event handler also resets the value of the controlled input element 
     * by calling the setNewNote. */
    setNewNote('')
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
  
    return (
    <div>
      <h1>Notes</h1>
        <div>
        <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? ' important ':' all '}
        </button>
        </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
       <input value={newNote} onChange={handleNoteChange}/>
       <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App

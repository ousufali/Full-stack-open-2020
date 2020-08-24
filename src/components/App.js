import React, { useState } from 'react'
import Notes from './Note'



const App = (props) => {
    // console.log(props)
    const [notes, setNote] = useState(props.notes)
    const [newNote, SetNewNote] = useState('Add new note.')
    const [showall,setshowall] = useState(true)

    // console.log(notes)

    // const notestoshow = showall ? notes : notes.filter(note => note.important === true)
    const notestoshow = showall ? notes : notes.filter(note => note.important)

    const HandleNoteChange = (event) => {
        // console.log(event.target)
        console.log(event.target.value)
        SetNewNote(event.target.value)
    }

    const addNote = (event) =>
    {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random()<0.5 ,
            id: notes.length + 1
        }
        setNote(notes.concat(noteObject))
        SetNewNote('')
        // console.log(notes)
    }

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick = {()=> setshowall(!showall)} >
                    show {showall ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notestoshow.map((note) => <Notes key={note.id} note={note} />

                )}
            </ul>

            <form onSubmit={addNote}>
                <input value={newNote} onChange={HandleNoteChange}>

                </input>
                <button type="submit">
                    save
                </button>
            </form>
        </div>
    )
}

export default App 
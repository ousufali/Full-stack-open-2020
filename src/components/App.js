import React, { useState, useEffect } from 'react'
import Notes from './Note'
import axios from 'axios'



const App = () => {
    // console.log(props)
    const [notes, setNote] = useState([])
    const [newNote, SetNewNote] = useState('Add new note.')
    const [showall, setshowall] = useState(true)

    // console.log(notes)

    // const notestoshow = showall ? notes : notes.filter(note => note.important === true)
    const notestoshow = showall ? notes : notes.filter(note => note.important)

    const HandleNoteChange = (event) => {
        // console.log(event.target)
        console.log(event.target.value)
        SetNewNote(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }
        setNote(notes.concat(noteObject))
        SetNewNote('')
        // console.log(notes)
    }

    useEffect(() => {
        console.log("Effect")

        axios
            .get('http://localhost:3001/notes')
            .then(
                (response) => {
                    // console.log(response)
                    console.log("Promise fulfilled")
                    setNote(response.data)

                }
            )
    }, [])

    console.log('render', notes.length, 'notes')

    return (
        <div>


            <h1>Notes</h1>
            <div>
                <button onClick={() => setshowall(!showall)} >
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
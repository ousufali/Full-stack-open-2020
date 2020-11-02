import React, { useState } from 'react'

const Noteform = ({ createNote }) => {

    const [newNote, setNewNote] = useState('')

    const handleChange = (event) => {
        // console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()

        createNote({
            content: newNote,
            important: Math.random() < 0.5,
        })

        setNewNote('')

        // noteService
        //     .create(noteObject)
        //     .then(initialnote => {
        //         setNote(notes.concat(initialnote))
        //         SetNewNote('')

        //     })
    }


    return (
        <div>
            <h2>Create a note</h2>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleChange} />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default Noteform
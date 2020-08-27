import React, { useState, useEffect } from 'react'
import Notes from './components/Note'

import noteService from './services/notes'



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

    const toggleImportance = (id) => {
        console.log(`Importance of ${id}  needs to be toggle`)

        // const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(x => x.id === id)
        const changednote = { ...note, important: !note.important }

        // axios
        // .put(url,changednote)
        noteService
            .update(id, changednote)
            .then(initialnote => {
                console.log(initialnote)
                setNote(notes.map(n => n.id !== id ? n : initialnote))
            })
            .catch(
                error =>
                {
                    alert(`the note "${note.content}" was not in server`)
                    setNote(notes.filter(z=>z.id !== id))
                }
            )

    }

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            // id: notes.length + 1
        }
        // setNote(notes.concat(noteObject))

        // console.log(notes)

        // axios
        // .post('http://localhost:3001/notes',noteObject)
        noteService
            .create(noteObject)
            .then(initialnote => {
                setNote(notes.concat(initialnote))
                SetNewNote('')

            })



    }

    useEffect(() => {
        console.log("Effect")

        // axios
        //     .get('http://localhost:3001/notes')
        noteService
            .getall()
            .then(
                (initialnote) => {
                    // console.log(response)
                    console.log("Promise fulfilled")
                    setNote(initialnote)

                }
            )
    }, [])

    console.log('render', notes.length, 'notes')

//     const fail = () => {
//         console.log("entering   fail function.")
//         noteService
//         .failedpromise()
//         .then(() => console.log('failedpromise: tue'))
//         .catch((error) => console.log('Return failed promise',error))
    


//     return (<></>)
// }

return (
    <div>
        {/* <div>
            promise failing
                <>
                {fail()}
            </>

        </div> */}

        <h1>Notes</h1>
        <div>
            <button onClick={() => setshowall(!showall)} >
                show {showall ? 'important' : 'all'}
            </button>
        </div>
        <ul>
            {notestoshow.map((note) => <Notes key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />

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
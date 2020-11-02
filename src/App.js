import React, { useState, useEffect, useRef } from 'react'
import Notes from './components/Note'

import noteService from './components/services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'
import LoginForm from './components/Login'
import Togglable from './components/Togglable'
import Noteform from './components/Noteform'

import loginService from './components/services/login'



const App = () => {
    // console.log(props)
    const [notes, setNote] = useState([])
    // const [newNote, SetNewNote] = useState('')
    const [showall, setshowall] = useState(true)
    const [errormessage, seterrormessage] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const noteFormRef = useRef()


    // console.log(notes)
    useEffect(() => {
        // console.log("Effect")
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

    useEffect(() => {
        const loggedUsersJSON = window.localStorage.getItem('loggedNoteAppUser')
        if (loggedUsersJSON) {
            const user = JSON.parse(loggedUsersJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
    }, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        // console.log('logging in with', username, password)
        // console.log("..................login")
        // console.log(loginService)
        // console.log(loginService.login)
        // console.log(".......END...........login")

        try {
            const user = await loginService.login({ username, password })

            window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))

            noteService.setToken(user.token)
            setUser(user)
            console.log(`login User:`, user)
            setUsername('')
            setPassword('')

        } catch (exception) {
            seterrormessage('Wrong Credentials')
            setTimeout(() => {
                seterrormessage(null)
            }, 5000)
        }
    }


    const notestoshow = showall ? notes : notes.filter(note => note.important)



    const toggleImportance = (id) => {
        console.log(`Importance of ${id}  needs to be toggle`)

        const note = notes.find(x => x.id === id)
        const changednote = { ...note, important: !note.important }


        noteService
            .update(id, changednote)
            .then(initialnote => {
                console.log(initialnote)
                setNote(notes.map(n => n.id !== id ? n : initialnote))
            })
            .catch(
                error => {
                    seterrormessage(`Note '${note.content}' was already removed from server`)
                    setTimeout(() => {
                        seterrormessage(null)
                    }, 5000);
                    // alert(`the note "${note.content}" was not in server`)
                    setNote(notes.filter(z => z.id !== id))
                }
            )

    }



    console.log('render', notes.length, 'notes')

    const loginForm = () => {
        return (

            <Togglable buttonLabel={"login"}>
                <LoginForm
                    username={username}
                    password={password}
                    handleUserNameChange={({ target }) => setUsername(target.value)}
                    handlePasswordChange={({ target }) => setPassword(target.value)}
                    handleSubmit={handleLogin}
                />
            </Togglable>
        )
    }

    const addNote = (noteObject) => {
        noteFormRef.current.toggleVisibility()
        noteService
            .create(noteObject)
            .then(returnedNote => setNote(notes.concat(returnedNote)))
    }

    const noteForm = () => (
        <Togglable buttonLabel="new note" ref={noteFormRef}>
            <Noteform createNote={addNote}
            />
        </Togglable>
    )


    return (
        <div>


            <h1>Notes</h1>
            <Notification message={errormessage} />


            {user === null ?
                loginForm() :
                <div>
                    <p>{user.name} logged-in</p>
                    {noteForm()}
                </div>}

            {/* {user === null && loginForm()}
            {user !== null && noteForm()} */}

            <div>
                <button onClick={() => setshowall(!showall)} >
                    show {showall ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notestoshow.map((note) => <Notes key={note.id} note={note} toggleImportance={() => toggleImportance(note.id)} />

                )}
            </ul>

            <Footer />
        </div >
    )

}

export default App 
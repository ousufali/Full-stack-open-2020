import React from 'react'
import Notes from './components/Note'


const App = ({ notes }) => {

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map( (x)=> <Notes key = {x.id} note = {x} />

                )}
            </ul>
        </div>
    )
}

export default App
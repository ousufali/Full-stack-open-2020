import React from 'react'
import DeleteContact from './DeleteContact'

const Person = ({person}) => {

    return (
        <div>
            {person.map((contact) => <p key={contact.name.length + Math.random()}> {contact.name}{"___"} {contact.number} {<DeleteContact person = {contact}/>}</p>)}
            
        </div>

    )
}

export default Person
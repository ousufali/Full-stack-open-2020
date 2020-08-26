import React from 'react'

const Person = ({person}) => {


    return (
        <div>
            {person.map((contact) => <p key={contact.name.length + Math.random()}> {contact.name} {contact.number}</p>)}
        </div>

    )
}

export default Person
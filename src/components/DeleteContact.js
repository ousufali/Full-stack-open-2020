import React from 'react'
import contactServices from './services/contacts'

const deletecontact = (person) => {

    // alert(`delete contact `)
    if (window.confirm(`Contact "${person.name}" will be deleted.`)) {
        return (

            contactServices
                .deletecontact(person.id)
                .then((returneddata) => {
                    // console.log("Delete data:", returneddata)
                    return (returneddata)
                })
                .catch(() => {
                    console.log("Deletion failed")
                })

        )

    }
    return(<></>)

}

const DeleteContact = ({ person }) => {


    // console.log("delete person id: = ", person.id)



    // console.log("deleteContact:....")

    return (
        <>

            <button onClick={() => deletecontact(person)}>delete</button>
            {/* <form>
                <button type = "submit" onClick = {() => deletecontact(person)}>delete</button>
            </form> */}
        </>
    )

}

export default DeleteContact
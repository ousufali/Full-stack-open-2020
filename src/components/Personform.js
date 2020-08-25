import React from 'react'

const Personform = ({ newname, newnumber, person, setnewname, setnewnumber, setperson }) => {

    const handle_name_change = (event) => {

        // console.log(event.target.value)
        setnewname(event.target.value)
    }
    const handel_number_change = (event) => {
        setnewnumber(event.target.value)
    }


    const addnewcontact = (event) => {
        event.preventDefault()
        var already_have = false

        const newobject = {
            name: newname,
            number: newnumber
        }

        // const already_have = person.filter((contact)=> contact.name === newname ? true :false)
        // console.log(already_have)
        // console.log(newname)

        person.forEach((contact) => {
            if (contact.name === newname) {
                already_have = true
            }
        })

        // console.log(already_have)
        // console.log(newname)

        if (!already_have) {
            setperson(person.concat(newobject))
            setnewname('')
            setnewnumber('')
        } else {
            alert(newname + ' is already added to phonebook');
        }


    }




    return (
        <form>
            <div>
                Name: <input value={newname} onChange={handle_name_change} />

            </div>
            <div>
                Number: <input value={newnumber} onChange={handel_number_change} />
            </div>

            <div>
                <button type="submit" onClick={addnewcontact} >
                    add
        </button>
            </div>

        </form>
    )
}

export default Personform
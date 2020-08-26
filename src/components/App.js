import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import Personform from './Personform'
import Person from './Person'



const App = () => {
    const [person, setperson] = useState([])
    const [newname, setnewname] = useState('Enter name')
    const [newnumber, setnewnumber] = useState('Enter number')
    const [search_name, set_search_name] = useState('Nill')
    const [effectrender, seteffectrender] = useState(false)

    // console.log(person.length)
    useEffect(() => {
        console.log("Effect")

        axios.get('http://localhost:3001/persons')
            .then(
                (response) => {
                    console.log("promise fulfilled")
                    setperson(response.data)
                    seteffectrender(false)

                }
            )

    }, [effectrender])



    return (
        <div>

            <h2>
                Phonebook
            </h2>

            <Filter search_name={search_name} set_search_name={set_search_name} person={person} />


            <h2>
                add a new
            </h2>

            <Personform newname={newname} newnumber={newnumber} person={person} setnewname={setnewname} setnewnumber={setnewnumber} setperson={setperson} seteffectrender = {seteffectrender}/>


            <h2>
                Numbers
            </h2>
            <Person person={person} />
        </div>
    )

}

export default App
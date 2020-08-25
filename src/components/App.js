import React, { useState } from 'react'

import Filter from './Filter'
import Personform from './Personform'
import Person from './Person'



const App = () => {
    const [person, setperson] = useState([{ name: 'Yousuf ali', number: '03483176127' }, { name: 'abu', number: '034832323' }])
    const [newname, setnewname] = useState('Enter name')
    const [newnumber, setnewnumber] = useState('Enter number')
    const [search_name, set_search_name] = useState('Nill')

    // console.log(person.length)







    return (
        <div>
            {/* <div>debug: {newname}</div>                
            <div>debug: {newnumber}</div>
            <div>d_handl_name: {search_name}</div> */}

            <h2>
                Phonebook
            </h2>

            <Filter search_name={search_name} set_search_name={set_search_name} person={person} />


            <h2>
                add a new
            </h2>

            <Personform newname={newname} newnumber={newnumber} person={person} setnewname={setnewname} setnewnumber={setnewnumber} setperson={setperson} />


            <h2>
                Numbers
            </h2>
            <Person person = {person}/>
        </div>
    )

}

export default App
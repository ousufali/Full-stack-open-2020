import React, { useState } from 'react'
import Printcountry from './Printcountry'

// const showcountry = (x, show) => {
//     if (show) {
//         return (
//             <div>
//                 <Printcountry country={x} />

//             </div>
//         )
//     }else
//     {
//         return(<></>)
//     }

// }


const Matching = ({ name, countries }) => {
    const [countrylist, setcountrylist] = useState([])
    const [show, setshow] = useState(false)
    const list = countries.filter((x) => x.name.toUpperCase().includes(name.toUpperCase()))
    const listlength = list.length



    // console.log("countries:  ", countries)
    // console.log("Listlength",listlength)
    // console.log(list)

    if (listlength > 10 && name != '') {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else {
        if (listlength === 1) {
            return (
                <div>
                    <Printcountry key={list[0].area} country={list[0]} />
                </div>
            )
        } else
            if (listlength < 11) {
                return (
                    <div>
                        {list.map((x) => {
                            return (
                                <div key={x.area}>
                                    {x.name}
                                    {/* <button onClick = {()=>setshow(!show)}> Show</button>
                                    <Printcountry country = {x} />
                                    {showcountry(x, show)} */}
                                </div>
                            )
                        })}
                    </div>
                )
            } else {
                return (<div></div>)
            }
    }


}
export default Matching
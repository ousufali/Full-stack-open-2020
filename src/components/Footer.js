import React from 'react'

const Footer= ()=>
{
    const footerstyle = {
        color:'green',
        fontStyle:'italic',
        fontSize:20,
        textAlign: 'center',
       
    }

    return(
       <div style = {footerstyle}>
           <br />
           <em>Note app, Department of Computer Science, University of Helsinki 2020</em>

       </div>

    )
}

export default Footer
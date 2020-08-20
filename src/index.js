import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick,text}) =>
{
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}

const History = ({allclicks})=>
{
  console.log(allclicks.length)
  if(allclicks.length === 0)
  {
    return(
      <div>
        The app is used by pressing the buttons.
      </div>
    )
  }

  return(
    <div>
      Button press history: {allclicks.join(' ')}
    </div>
  )
}
const App = () => {
  const [left, setleft] = useState(0)
  const [right, setright] = useState(0)
  const [allclicks, setall] = useState([])

  const increaseleft = ()=> 
  {
    setall(allclicks.concat('L'))
    setleft(left + 1)
  }


  const increaseright = ()=> 
  {
    allclicks.push('R')  /////  not this way, take the upper one.
    setall(allclicks)
    setright(right + 1)
  }

  return(
    <div>
      <>
      {left}
      <Button handleClick = {increaseleft} text = 'left'/>
      
      <Button handleClick = {increaseright} text = 'right' />
      {right}
      <History allclicks = {allclicks} />
      <button onClick = {()=>console.log('Hello')}>print hello</button>
      <button onClick = {()=>setleft(0)}>set L zero</button>
      </>
    </div>
  )


}

ReactDOM.render(
  <App />
  , document.getElementById('root')
)

// let counter = 1;

// const refresh = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App counter={counter} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// setInterval(()=> { refresh()
//    counter+=1
//   },1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({handleClick,text}) =>
{
  return(
    <button onClick = {handleClick}>{text}</button>
  )
}

const App = () => {
  // const [left, setleft] = useState(0)
  // const [right, setright] = useState(0)

  const [clicks, setclicks] = useState({left:0 , right:0})

  const increaseleft = ()=>
  {
    // const newclick = { 
    //   ...clicks,
    //   left: clicks.left + 1
    //   // right: clicks.right
    // }
    setclicks({...clicks,left:clicks.left + 1})
  }
  const increaseright = ()=> setclicks({...clicks, right:clicks.right + 1})

  return(
    <div>
      <>
      {clicks.left}
      <Button handleClick = {increaseleft} text = 'left'/>
      
      <Button handleClick = {increaseright} text = 'right' />
      {clicks.right}
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

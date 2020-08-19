import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Display = ({counter})=>
{
return(<div>{counter}</div>)
}

const Button=({handleClick,text})=>
{
  return(
  <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  // setTimeout(() => setcounter(counter + 1), 3000)
  // console.log('Rendering.... ',counter)

  const increasebyone = ()=> setCounter(counter + 1)
  const decreasebyone = ()=> setCounter(counter - 1)
  const settozero = ()=> setCounter(0);

  return (<div>{counter}</div>,
    <div>
      <Display counter = {counter} />
      <Button handleClick = {increasebyone} text='Plus' />
      <Button handleClick = {decreasebyone} text='Minus' />
      <Button handleClick={settozero} text='Reset' />
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

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import * as serviceWorker from './serviceWorker';

const Header = (props)=>
{
  return(
    <h2>{props.course}</h2>
  )
}
const Part=(props)=>
{
  return(
    <div>
      <p>{props.name} {props.numbers}</p>
    </div>
    

  )
}
const Content=(props)=>{
  return(
  <div>
    <Part name={props.part1} numbers={props.exercise1} />
    <Part name={props.part2} numbers={props.exercise2} />
    <Part name={props.part3} numbers={props.exercise3} />  
  </div>
  )
}

const Total=(props)=>
{
  return(
  <p>Number of exercises {props.exercise1 +props.exercise2 +props.exercise3}</p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to passing data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

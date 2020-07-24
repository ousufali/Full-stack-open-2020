import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import * as serviceWorker from './serviceWorker';

const Header = (props)=>
{
  console.log(props)
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
    <Part name={props.part1.name} numbers={props.part1.exercises} />
    <Part name={props.part2.name} numbers={props.part2.exercises} />
    <Part name={props.part3.name} numbers={props.part3.exercises} />  
  </div>
  )
}

const Total=(props)=>
{
  return(
  <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}

const App = () => {
  const course = 'Half stack application development'
  //const part1 = 'Fundamentals of React'
  //const exercise1 = 10
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to passing data',
    exercises: 7
  }
  const part3 = {
    name: 'State of component',
    exercises: 14
  }
  /*const part2 = 'Using props to passing data'
  const exercise2 = 7
  const part3 = 'State of component'
  const exercise3 = 14  */

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}  />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
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

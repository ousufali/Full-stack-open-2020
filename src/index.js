import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ clickhandle, text }) => {
    return (
        <button onClick={clickhandle}>{text}</button>
    )

}

const All = ({ g, b, n, text }) => {
    return (
        <div>{text} {g + b + n}</div>
    )
}
const Positive = ({ g, b, n, text }) => {
    return (
        <div>{text} {g / (g + b + n) * 100}{'%'}</div>
    )
}
const Statistics = ({ g, n, b, }) => {
    if (g === 0 && b=== 0 && n===0) {
        return (
            <div><h4>No feedback given.</h4></div>
        )
    }
    return (
        <div>
            <Feedback text={'good'} count={g} />
            <Feedback text={'neutral'} count={n} />
            <Feedback text={'bad'} count={b} />

            <All g={g} b={b} n={n} text={'all'} />
            <Positive g={g} b={b} n={n} text={'positive'} />
        </div>
    )
}
const Feedback = ({ text, count }) => {
    return (
        <div>{text} {count}</div>
    )
}
const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>Give feedback</h2>
            <Button clickhandle={() => setGood(good + 1)} text={'good'} />
            <Button clickhandle={() => setNeutral(neutral + 1)} text={'neutal'} />
            <Button clickhandle={() => setBad(bad + 1)} text={'bad'} />
            <h2>Statistics</h2>

            <Statistics g= {good} n = {neutral} b = {bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
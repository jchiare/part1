import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => {
    return(
    <button onClick={handleClick}>
        {text}
    </button>
    )
}

const Statistic = ({text, value}) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    )
}

const Statistics = ({good, neutral, bad, all}) => {
    if (all === 0){
        return <p>No feedback given</p>;
    }
    return (
        <table>
            <Statistic text="Good" value={good}/>
            <Statistic text="Neutral" value={neutral}/>
            <Statistic text="Bad" value={bad}/>
            <Statistic text="All" value={all}/>
            <Statistic text="Average" value={(good - bad) / all || 0}/>
            <Statistic text="Percentage" value={good / all || 0}/>
        </table>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;

  return (
    <div>
      <h2>Give Feedback</h2>
        <Button text="good" handleClick={() => setGood(good + 1)}/>
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
        <Button text="bad" handleClick={() => setBad(bad + 1)}/>
      <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
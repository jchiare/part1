import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const HandleVotes = (position,array) => {
    const copy = [...array];
    copy[position] += 1; 
    return copy
}

const HighestValue = (array) => {
    return array.indexOf(Math.max.apply({}, array))
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  return (
    <>
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <Button text="vote" handleClick={() => setPoints(HandleVotes(selected,points))}/>
      <Button text="next anecdote" handleClick={() => setSelected(getRandomInt(anecdotes.length))}/>
    </div>
    <div>
        <h2>Anecdote with the most votes</h2>
        <p>{props.anecdotes[HighestValue(points)]}</p>
        <p>has {points[HighestValue(points)]} points</p>
    </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React, { useState } from "react"

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const MostVotes = ({ array, anecdotes }) => {
  let max = Math.max(...array)
  let indexOfMaxValue = array.indexOf(Math.max(...array))
  return (
    <div>
      {anecdotes[indexOfMaxValue]}
      <div>has {max} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  console.log(points)

  const handleClicked = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleClickedVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <div>has {points[selected]} votes</div>
      <div>
        <Button onClick={handleClickedVote} text="vote" />
        <Button onClick={handleClicked} text="next anecdote" />
      </div>
      <h2>Anecdote with most votes</h2>
      <MostVotes array={points} anecdotes={anecdotes} />
    </div>
  )
}

export default App

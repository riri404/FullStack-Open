import { useState } from 'react'

const Button = (props) => <button onClick= {props.onClick}>{props.text} </button>


const StatisticLine  = ({text, value}) => {
    if (text === 'positive') {
        return (
            <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
          )
      }
      return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral+ bad
    const average = (good - bad)/total
    const percentage= (good/total)*100

    if(total === 0){
        return(
            <p>No feedback given</p>
        )
    }
    return(
        <div>
            <h2>statistics</h2>
            <table>
        <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='total' value={total}/>
            <StatisticLine text='average' value={average}/>
            <StatisticLine text='positive' value={percentage}/>
        </tbody></table>
        </div>

    )
    
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => setGood(good + 1)

  const handleNeutralClick = () => setNeutral(neutral + 1)
  
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
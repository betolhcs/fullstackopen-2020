import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttom = ({set, text}) => <button onClick={set}> {text} </button>

const Statistic = ({typeofData, data}) => {
    return(
        <tr>
            <td>{typeofData}</td>
            <td>{data}</td>
        </tr>
    )
}

const Statistics = (props) => {
    return(
            <table>
                <Statistic typeofData="good" data={props.good}/>
                <Statistic typeofData="neutral" data={props.neutral}/>
                <Statistic typeofData="bad" data={props.bad}/>
                <Statistic typeofData="all" data={props.all}/>
                <Statistic typeofData="average" data={props.average}/>
                <Statistic typeofData="positive" data={props.positive.toString()+" %"}/>    
            </table>
    )
}

const App = () => {
  // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let all = good+bad+neutral
    let average = (good-bad)/all
    let positive = good/all

    if (all===0){
        return(
            <div>
            <h1>give feedback</h1>
            <Buttom set={() => setGood(good+1)} text={"Good"}/>
            <Buttom set={() => setNeutral(neutral+1)} text={"Neutral"}/>
            <Buttom set={() => setBad(bad+1)} text={"Bad"}/>
            <h1>statistics</h1>
            <p>No feedback given</p>
            </div>
        )
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Buttom set={() => setGood(good+1)} text={"Good"}/>
            <Buttom set={() => setNeutral(neutral+1)} text={"Neutral"}/>
            <Buttom set={() => setBad(bad+1)} text={"Bad"}/>
            <h1>statistics</h1>
            <Statistics good={good} bad={bad} average={average} all={all} positive={positive}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
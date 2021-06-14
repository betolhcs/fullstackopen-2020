import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({clickfunc, text}) => <button onClick={clickfunc}>{text}</button>

const Mostvoted = ({anecdotes}) => {
    let votes = 0
    let mostvoted = ""
    for (let i=0;i<=5;i++){
        if (votes<=anecdotes[i].votes){
            votes=anecdotes[i].votes
            mostvoted=anecdotes[i].name
        }
    }
    return(
        <div>{mostvoted}</div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [allvotes , setVotes] = useState(0)

    const votefunc = () =>{
        props.anecdotes[selected].votes+=1
        setVotes(allvotes+1)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{props.anecdotes[selected].name}</div>
            <div>{"has "+ props.anecdotes[selected].votes +" votes"}</div>
            <Button text="vote" clickfunc={votefunc}/>
            <Button text="next anecdote" clickfunc={() => setSelected(Math.floor(Math.random()*6))}/>
            <h1>Anecdote with most votes</h1>
            <Mostvoted anecdotes={props.anecdotes}/>
        </div>
    )
}

const anecdotes = [
    {name:'If it hurts, do it more often', votes:0},
    {name:'Adding manpower to a late software project makes it later!', votes:0},
    {name:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes:0},
    {name:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes:0},
    {name:'Premature optimization is the root of all evil.', votes:0},
    {name:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes:0}
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)
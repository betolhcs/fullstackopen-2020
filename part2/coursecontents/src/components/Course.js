import React from 'react';

const Header = (props) => <h2>{props.name}</h2>

const Part = ({part}) => {
    return(
        <>
            <p>
                {part.name} {part.exercises}
            </p>
        </>
    )
}

const Content = ({parts}) => {
    return(
        <>
            {parts.map(part => <Part part={part}/>)} 
        </>
    )
}

const Total = ({parts}) => {
    const calc = (total, proximo) => {
        total.exercises+=proximo.exercises
        return (total)
    }

    return(
        <>
            <p><strong>Total of {parts.reduce(calc).exercises} exercises</strong></p>
        </>
    )
}

const Course = ({course}) => {
    return(
        <>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </>
    )
}

export default Course
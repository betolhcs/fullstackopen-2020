import React from 'react'

const Message = ({message}) =>{
    const successStyle = {
        color : "green",
        background : "lightgrey",
        fontSize : 20,
        borderStyle : "solid",
        borderRadius : 5,
        padding : 10,
        marginBottom : 10
    }
    if (message === "") {
        return null
    }
    else {
        return <div style={successStyle}>{message}</div>
    }
}

export default Message
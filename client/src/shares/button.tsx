import React from 'react';

const Button = ( props ) => {
    return <button className = "sendButton" onClick = { props.onClick }>{props.title}</button>
}

export const Logout = ( props ) => {
    return <button className = "logoutButton" onClick = { props.onClick }>{props.title}</button>
}

export default Button;
import React from 'react';
import { Link } from 'react-router-dom'

export class Unauthorized extends React.Component{
    render(){
        return <h2>Unauthorized, please <Link to = "/login">login</Link> </h2>
    }
}
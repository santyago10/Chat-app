// import { observer, PropTypes } from "mobx-react";
import React from 'react';
import '../App.css';
import Button from '../shares/button';
import { observer } from 'mobx-react';


export const Login = observer( props =>(
    <div className = 'login-form' id = 'login-form'>
        <form name = 'login'>
        <h2 className = 'caption'>Login</h2>
        <label className = 'label'>Nickname</label>
        <input type = 'text' className = 'text' value = { props.userModel.nickname } placeholder = 'Nickname' onChange = { e => props.userModel.setNickname( e.target.value ) }/>
        <label className = 'label'>Password</label>
        <input type = 'password' className = 'text' value = { props.userModel.password }  placeholder = 'Password' onChange = { e => props.userModel.setPassword( e.target.value )} />
        <Button title = "LOGIN" onClick = { e => { props.userStore.login( e, props.userModel.nickname, props.userModel.password )}}/>
     </form>
   </div>
))


import React from 'react';
import { Login } from './login';
import { userModel, userStore } from '../stores/user.store';

export class LoginComponent extends React.Component {
    render(){
        return <Login userModel = { userModel } userStore = { userStore }/>
    }
}
import React from 'react';
import { MessageList } from "./message-list";
import { messageStore } from "../stores/message.store"
import { MessageSend } from "./message-send";
import './message.css'
import { userStore } from '../stores/user.store';
import { Logout } from '../shares/button';

export class MessageComponent extends React.Component{
    constructor( props ){
        super( props );
        userStore.isAuthenticated();
        messageStore.getMessages();
    }
    render(){
        return <div className = "window">
            <Logout title = "Logout" onClick = { e => { userStore.logout() } }/>
            <div id = "dialogue" className = 'dialogue'>
                <MessageList messages = { messageStore.messages }/>
            </div>
            <MessageSend />
        </div>

    }
}


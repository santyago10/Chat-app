import React from 'react';
import { observer } from 'mobx-react';
import Button from '../shares/button';
import { userStore } from '../stores/user.store';
import { messageStore, messageModel } from '../stores/message.store';
import './message.css';

export const MessageSend = observer( props => (
    <div className = "form">
        <textarea className = "messageContent" name = 'content' value = { messageModel.text} onChange = { e => { messageModel.setText( e.target.value )}} ></textarea>
        <Button title = "Send" onClick = { e => { messageStore.sendMessage( e, userStore.nickname, messageModel.text ) } }/>
        {/* <select className = "user" value = { userModel.nickname } onChange = { e => { userModel.setNickname( e.target.value ) } }>
            <option>john</option>
            <option>smith</option>
        </select> */}
    </div>   
))
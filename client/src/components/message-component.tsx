import React from 'react';
import { MessageList } from "./message-list";
import { messageStore } from "../stores/message.store"
import { MessageSend } from "./message-send";
import './message.css'

export class MessageComponent extends React.Component{
    constructor( props ){
        super( props );
        messageStore.getMessages();
    }
    
    componentDidMount(){
        let div = document.getElementById("dialogue");
        div.scrollTop = div.scrollHeight;
        console.log(div);
    }

    render(){
        return <div className = "window">
            <div id = "dialogue" className = 'dialogue'>
                <MessageList messages = { messageStore.messages }/>
            </div>
            <MessageSend />
        </div>

    }
}


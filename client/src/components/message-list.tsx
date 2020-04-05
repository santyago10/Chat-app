import { observer } from "mobx-react";
import React from 'react';
import './message.css'

export const MessageList = observer( ( props ) => (
    <div>
     { props.messages.map( item => {
        if( item.user_nickname === "john" )
        {
           return  <div className = "johnMessage">
                <p className = "owner">{ item.user_nickname }</p>
                <p className = "content">{ item.text }</p>  
            </div>
        }
        else
        {
           return <div className = "smithMessage">
                <p className = "owner">{ item.user_nickname }</p>
                <p className = "content">{ item.text }</p>  
            </div>
        }
    })}
    </div>
));


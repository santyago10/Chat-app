import { types, unprotect } from 'mobx-state-tree';
import { Message } from '../models/message.model';
import { Service } from '../services/api.service';

let service: Service = new Service();

export const Store = types.model({
    messages: types.array( Message )
})
.actions( self => ({
    async getMessages(){
        let messages = await service.getMessages();
        if( messages ){
            self.messages = messages;
        }
    },

    async sendMessage( e, inputNickname, inputMessage ){
        e.preventDefault();
        e.stopPropagation();

        if( inputMessage.trim().length === 0)
        alert(" You can't send empty message");
        else{

        let data = {
            user_: inputNickname,
            text: inputMessage.trim()
        }

        let newMessage = {
            user_nickname: inputNickname,
            text: inputMessage.trim()
        }

        await self.messages.push( newMessage );

        let div = document.getElementById("dialogue");
        div.scrollTop = div.scrollHeight;

        messageModel.setText("");
        if( !await service.sendMessage( data ) ){
            alert( "Error while connecting to server" );
            self.messages.pop();
        }
    }
    }
}))

export const messageStore = Store.create({});
unprotect( messageStore );

export const messageModel = Message.create({});


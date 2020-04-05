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
        self.messages = messages;
    },

    async sendMessage( e, inputNickname, inputMessage ){
        e.preventDefault();
        e.stopPropagation();

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
        service.sendMessage( data );   
    }
}))

export const messageStore = Store.create({});
unprotect( messageStore );

export const messageModel = Message.create({});


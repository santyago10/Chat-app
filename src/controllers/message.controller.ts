import * as express from 'express';
import MessageService from '../services/message.service';

class MessageController {
    private service: MessageService = new MessageService();

    public getAll = async ( request: express.Request, response: express.Response ) => {
        let messages = await this.service.getAll();
        response.send( messages );
    }

    public getById = async ( request: express.Request, response: express.Response ) => {
        let messages = await this.service.getById( request.params.id );
        response.send( messages );
    }

    public createMessage = async ( request: express.Request, response: express.Response ) => {
        let newMessage = await this.service.createMessage( request.body );
        response.send( newMessage );
    }
}

export default MessageController;
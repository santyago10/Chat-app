import { getRepository } from 'typeorm';
import Message from '../models/message.entity';

class MessageService {
    private messageRepository;

    constructor(){
        this.messageRepository = getRepository( Message );
    }

    public async getAll(){
        let messages = await this.messageRepository.query('SELECT * FROM MESSAGE');
        return messages;
    }

    public async createMessage( data ){
        let newMessage = await this.messageRepository.save( data );
        return newMessage;
    }

    public async getById( id ){
        let messages = await this.messageRepository.find( { user_: id } );
        return messages;
    }
}

export default MessageService;
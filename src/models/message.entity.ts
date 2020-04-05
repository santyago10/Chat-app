import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './user.entity';

@Entity()
class Message{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public text: string;    

    @ManyToOne( () => User, (user: User) => user.messages)
    public user_: User;
}

export default Message;
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';
import Message from './message.entity';

@Entity()
class User{
    @PrimaryColumn()
    public nickname: string;

    @OneToMany( () => Message, (message: Message) => message.user_)
    public messages: Message[];

}

export default User;
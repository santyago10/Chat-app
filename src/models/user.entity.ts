import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Message from './message.entity';

@Entity()
class User{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nickname: string;

    @OneToMany( () => Message, (message: Message) => message.user_)
    public messages: Message[];

}

export default User;
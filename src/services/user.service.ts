import { getRepository } from 'typeorm';
import User from '../models/user.entity';

class UserService {
    private userRepository;

    constructor(){
        this.userRepository = getRepository(User);
    }

    public async getAll(){
        let users = await this.userRepository.find();
        return users;
    }
}

export default UserService;
import * as express from 'express';
import UserService from '../services/user.service';

class UserController {
    private service: UserService = new UserService();

    public getAll = async ( request: express.Request, response: express.Response ) => {
        let users = await this.service.getAll();
        response.send( users );
    }
}

export default UserController;
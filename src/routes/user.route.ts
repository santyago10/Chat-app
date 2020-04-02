import * as express from 'express';
import UserController from '../controllers/user.controller';

class UserRoute{
  public path = '/users';
  public router = express.Router();
  public controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get( this.path, this.controller.getAll );
  }
}

export default UserRoute;
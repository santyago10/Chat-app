import * as express from 'express';
import UserController from '../controllers/user.controller';
import passport from 'passport';

class UserRoute{
  public path = '/users';
  public router = express.Router();
  public controller = new UserController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get( this.path, this.controller.getAll );

    this.router.get('/logout', function(req, res){
      req.logout();
      res.send('Logged out');
    });

    this.router.get('/login', function ( req, res ) {
     if(req.isAuthenticated())
     {
      res.send(req.user);
     }
     else
     {
     console.log(req);
     res.send(false);
     }
    }
    );

    this.router.post('/login',
      passport.authenticate( 'local'),
       function( req, res ) {
        res.send(req.body);
      }
    );
  }
}

export default UserRoute;
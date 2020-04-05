import * as express from 'express';
import MessageController from '../controllers/message.controller';

class MessageRoute{
  public path = '/messages';
  public router = express.Router();
  public controller = new MessageController();

  constructor() {
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.get( this.path, function ( req, res, next ) {
      if(req.isAuthenticated())
      next();
      else
      res.send(false);
     }, this.controller.getAll );
     
    this.router.post( this.path, this.controller.createMessage );

  }
}

export default MessageRoute;
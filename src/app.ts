import express from 'express';
import * as bodyParser from 'body-parser';
import { getRepository } from 'typeorm';
import  passport  from "passport";
import  passportLocal from "passport-local";
import  session from 'express-session';
import User from './models/user.entity';

const LocalStrategy = passportLocal.Strategy;

passport.use( new LocalStrategy( {
  usernameField: 'nickname',
  passwordField: 'password'},
  async function ( userNickname, password, done ) {
    const user = getRepository(User);

    let result = await user.findOne( { nickname: userNickname } )

    if( !result ){
      return done( null, false );
    }
    if ( result.password !== password ) { return done( null, false ); }
      return done( null, result );
  }
));

passport.serializeUser(function ( user: any, done) {
  done( null, user.nickname );
});

passport.deserializeUser( async function( userNickname: string, done ) {
  const user = getRepository(User);

  let result = await user.findOne( userNickname );
  if( result )
    done( null, result );
});

class App {
  public app: express.Application;
  public port: number;
 
  constructor( controllers, port ) {
    this.app = express();
    this.port = port;
 
    this.initializeMiddlewares();
    this.initializeControllers( controllers );
  }
 
  private initializeMiddlewares() {
     this.app.use(bodyParser.json()); 
     this.app.use(function( req, res, next ) {
      res.header("Access-Control-Allow-Origin", "http://localhost:3000"  ); // update to match the domain you will make the request from
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
      res.header( "Access-Control-Allow-Credentials", "true");
      next();
    });
    this.app.use(session({ secret: 'SECRET', cookie: { maxAge: 120000 } }));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }
 
  private initializeControllers( controllers ) {
    controllers.forEach( ( controller ) => {
      this.app.use( '/', controller.router );
    });
  }
 
  public listen() {
    this.app.listen( this.port, () => {
      console.log(`App listening on the port ${this.port}` );
    });
  }
}
 
export default App;
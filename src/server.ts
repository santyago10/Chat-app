import 'dotenv/config';
// import 'reflect-metadata';
import { createConnection } from 'typeorm';
import App from './app';
import config from './ormconfig';
import UserRoute from './routes/user.route';
import MessageRoute from './routes/message.route';


 
( async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UserRoute, new MessageRoute],
    5000
  );
  app.listen();
})();
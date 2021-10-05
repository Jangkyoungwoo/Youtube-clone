require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import session, { Cookie } from 'express-session';
import MongoStore from 'connect-mongo';
import { localsMiddleware } from './middlware';

import rootRouter from './router/rootRouter';
import userRouter from './router/usersRouter';
import videosRouter from './router/videosRouter';

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + '/src/views');
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
}));

app.use(localsMiddleware);
app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/videos', videosRouter);

export default app;


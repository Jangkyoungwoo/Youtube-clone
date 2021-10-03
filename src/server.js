import express from 'express';
import session from 'express-session';
import morgan from 'morgan';

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
  secret: "Hello!",
  resave: true,
  saveUninitialized: true,
}));

app.use('/', rootRouter);
app.use('/users', userRouter);
app.use('/videos', videosRouter);

export default app;


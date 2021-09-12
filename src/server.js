import express from 'express';
import morgan from 'morgan';
import globalRouter from './router/globalRouter';
import userRouter from './router/usersRouter';
import videosRouter from './router/videosRouter';

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + '/src/views');
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videosRouter);

export default app;


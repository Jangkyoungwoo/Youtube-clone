import express from 'express';
import morgan from 'morgan';
import globalRouter from './router/globalRouter';
import userRouter from './router/usersRouter';
import videosRouter from './router/videosRouter';

const app = express();
const PORT = 4000;

const logger = morgan("dev");
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videosRouter);


const listening = () => { console.log(`✅ Server listening on port https://localhost:${PORT} 🚀`) };
app.listen(PORT, listening);
import express from 'express';
import { login, join } from '../controllers/userController'
import { home, searchVideo } from '../controllers/videoController'

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/login', login);
globalRouter.get('/join', join);
globalRouter.get("/search", searchVideo);

export default globalRouter;
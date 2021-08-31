import express from 'express';
import { home, login, join } from '../controllers/userController'
import { search } from '../controllers/videoController'

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.get('/login', login);
globalRouter.get('/join', join);
globalRouter.get('/search', search);

export default globalRouter;
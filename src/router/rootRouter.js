import express from 'express';
import { login, join, getJoin, postJoin } from '../controllers/userController'
import { home, searchVideo } from '../controllers/videoController'

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.route('/join', join).get(getJoin).post(postJoin);
globalRouter.get('/login', login);
globalRouter.get("/search", searchVideo);

export default globalRouter;
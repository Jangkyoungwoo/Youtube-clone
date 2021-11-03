import express from 'express';
import { getLogin, postLogin, getJoin, postJoin } from '../controllers/userController'
import { home, searchVideo } from '../controllers/videoController'
import { publicOnlyMiddleware } from '../middlware';

const globalRouter = express.Router();

globalRouter.get('/', home);
globalRouter.route('/join').all(publicOnlyMiddleware).get(getJoin).post(postJoin);
globalRouter.route('/login').all(publicOnlyMiddleware).get(getLogin).post(postLogin);
globalRouter.get("/search", searchVideo);

export default globalRouter;
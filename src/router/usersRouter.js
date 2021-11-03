import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin } from "../controllers/userController";
import { protectorMiddlware, publicOnlyMiddleware } from '../middlware';

const usersRouter = express.Router();

usersRouter.get("/logout", protectorMiddlware, logout);
usersRouter.route("/edit").all(protectorMiddlware).get(getEdit).post(postEdit);
usersRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);


export default usersRouter;
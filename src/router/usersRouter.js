import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.route("/edit").get(getEdit).post(postEdit);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);


export default usersRouter;
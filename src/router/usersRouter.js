import express from "express";
import { edit, remove, logout, startGithubLogin, finishGithubLogin } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);


export default usersRouter;
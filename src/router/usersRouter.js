import express from "express";
import { getEdit, postEdit, logout, startGithubLogin, finishGithubLogin, getChangePassword, postChangePassword } from "../controllers/userController";
import { protectorMiddlware, publicOnlyMiddleware, uploadFiles, } from '../middlware';

const usersRouter = express.Router();

usersRouter.get("/logout", protectorMiddlware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddlware)
  .get(getEdit)
  .post(uploadFiles.single("avatar"), postEdit);
usersRouter.route("/change-password").all(protectorMiddlware).get(getChangePassword).post(postChangePassword);
usersRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);


export default usersRouter;
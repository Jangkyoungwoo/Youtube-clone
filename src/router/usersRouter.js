import express from "express";
import { user, edit, remove, logout } from "../controllers/userController";

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);
usersRouter.get("/:id(\\d+)", user);

export default usersRouter;
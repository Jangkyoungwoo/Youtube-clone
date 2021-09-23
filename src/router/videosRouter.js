import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videosRouter = express.Router();


videosRouter.get("/:id([0-9,a-z]{24})", watch);
videosRouter.route("/:id([0-9,a-z]{24})/edit").get(getEdit).post(postEdit);
videosRouter.route("/upload").get(getUpload).post(postUpload);


export default videosRouter;


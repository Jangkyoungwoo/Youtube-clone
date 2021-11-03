import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload, deleteVideo } from "../controllers/videoController";
import { protectorMiddlware } from '../middlware';

const videosRouter = express.Router();


videosRouter.get("/:id([0-9,a-z]{24})", watch);
videosRouter.route("/:id([0-9,a-z]{24})/edit").all(protectorMiddlware).get(getEdit).post(postEdit);
videosRouter.route("/:id([0-9,a-z]{24})/delete").all(protectorMiddlware).get(deleteVideo);
videosRouter.route("/upload").all(protectorMiddlware).get(getUpload).post(postUpload);


export default videosRouter;


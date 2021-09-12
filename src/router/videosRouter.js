import express from "express";
import { watch, getEdit, postEdit, getUpload, postUpload } from "../controllers/videoController";

const videosRouter = express.Router();


videosRouter.route("/upload").get(getUpload).post(postUpload);
videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);


export default videosRouter;


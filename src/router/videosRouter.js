import express from "express";
import { watch, getEdit, postEdit, remove, upload, commants } from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/upload", upload);
videosRouter.get("/commats", commants);
videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videosRouter.get("/:id(\\d+)/remove", remove);

export default videosRouter;


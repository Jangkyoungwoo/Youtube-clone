import express from "express";
import { watch, edit, remove, upload, commants } from "../controllers/videoController";

const videosRouter = express.Router();

videosRouter.get("/upload", upload);
videosRouter.get("/commats", commants);
videosRouter.get("/:id(\\d+)/watch", watch);
videosRouter.get("/:id(\\d+)/edit", edit);
videosRouter.get("/:id(\\d+)/remove", remove);

export default videosRouter;


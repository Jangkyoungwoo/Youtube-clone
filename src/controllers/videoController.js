import { query } from 'express';
import Video from "../models/Video";
//import { formatHashtags } from '../models/Video';

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "asc" });
  return res.render("home", { titleContent: "home", videos })
};
export const searchVideo = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    videos = await Video.find({
      title: {
        $regex: new RegExp(`${keyword}$`, 'i')
      }
    })
  }
  return res.render("search", { titleContent: "Search", videos });
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { titleContent: "video is not found" });
  }
  return res.render("watch", { titleContent: video.title, video });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { titleContent: "video is not found" });
  }
  return res.render("edit", { titleContent: `Editing`, video });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { titleContent: "video is not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags)
  });
  return res.redirect(`/videos/${id}`);

};
export const getUpload = (req, res) => {
  return res.render("upload", { titleContent: `Upload your video!` });
};
export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    })
    return res.redirect("/");
  }
  catch (error) {
    return res.render("upload", {
      titleContent: `Upload your video!`,
      errorMessage: error._message
    });
  }
};
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  await Video.findByIdAndDelete({ _id: id });
  res.redirect("/");
};

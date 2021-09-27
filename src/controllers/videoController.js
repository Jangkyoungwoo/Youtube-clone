import Video from "../models/Video";
//import { formatHashtags } from '../models/Video';

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { titleContent: "home", videos })
};
export const search = (req, res) => { res.send("search") };
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
    return res.render("404", { titleContent: "video is not found" });
  }
  return res.render("edit", { titleContent: `Editing`, video });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { titleContent: "video is not found" });
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
import Video from "../models/Video";

/*Video.find({}, (error, videos) => {
  console.log("errors", error);
  console.log("videos", videos);
  return res.render("home", { titleContent: "home", videos: [] })
});*/

export const home = async (req, res) => {
  try {
    console.log("start");
    const videos = await Video.find({});
    console.log("finish");
    return res.render("home", { titleContent: "home", videos })
  }
  catch (error) {
    return res.render("server-error", { error });
  }
};
export const search = (req, res) => { res.send("search") };
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { titleContent: `Watching` }
  );
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { titleContent: `Editing` })
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { titleContent: `Upload your video!` });
};
export const postUpload = (req, res) => {
  const { newTitle } = req.body;
  return res.redirect("/");
};
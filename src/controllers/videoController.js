let videos = [
  {
    title: "FirstVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1
  },
  {
    title: "secondVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2
  },
  {
    title: "thirdVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3
  },
  {
    title: "FourthVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 4
  },
];
export const search = (req, res) => { res.send("search") };
export const watch = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const video = videos[id - 1];
  return res.render("watch", { titleContent: `Watching a ${video.title}`, video }
  );
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { titleContent: `Editing ${video.title}`, video })
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const remove = (req, res) => { res.send("this is a remove page in videosRouter") };
export const upload = (req, res) => { res.send("this is a upload page in videosRouter") };
export const commants = (req, res) => { res.send("this is a commats page in videosRouter") };
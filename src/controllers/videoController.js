const videos = [
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
    id: 1
  },
  {
    title: "thirdVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1
  },
  {
    title: "FourthVideo",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1
  },
];

export const search = (req, res) => { res.send("search") };
export const watch = (req, res) => { res.render("watch", { titleContent: "watch", videos }) };
export const edit = (req, res) => { res.send("this is a edit page in videosRouter") };
export const remove = (req, res) => { res.send("this is a remove page in videosRouter") };
export const upload = (req, res) => { res.send("this is a upload page in videosRouter") };
export const commants = (req, res) => { res.send("this is a commats page in videosRouter") };
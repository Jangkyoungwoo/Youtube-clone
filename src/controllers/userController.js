export const home = (req, res) => { res.send("home") };
export const login = (req, res) => { res.send("login") };
export const join = (req, res) => { res.send("join") };
export const user = (req, res) => {
  console.log(req.params.id);
  return res.send(`user id#${req.params.id}`)
};
export const logout = (req, res) => { res.send("this is a logout page in userRouter") };
export const edit = (req, res) => { res.send("this is a edit page in userRouter") };
export const remove = (req, res) => { res.send("this is a remove page in userRouter") };
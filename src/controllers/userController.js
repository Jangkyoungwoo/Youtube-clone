import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("createAccount", { titleContent: "Create Account" })
};
export const postJoin = async (req, res) => {
  const { email, userName, password, name, location } = req.body;
  const user = await User.create({
    email, userName, password, name, location
  });

  return res.redirect("/login");
}
export const login = (req, res) => { res.send("login") };
export const logout = (req, res) => { res.send("this is a logout page in userRouter") };
export const edit = (req, res) => { res.render("edit", { titleContent: "edit" }) };
export const remove = (req, res) => { res.send("this is a remove page in userRouter") };
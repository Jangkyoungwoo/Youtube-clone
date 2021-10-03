import User from "../models/User";
import bcrypt from "bcrypt";
import session from 'express-session';

export const getJoin = (req, res) => {
  res.render("join", { titleContent: "Join" })
};
export const postJoin = async (req, res) => {
  const { email, userName, password, confirmPassword, name, location } = req.body;
  const exitInfo = await User.exists({ $or: [{ email }, { userName }] });
  if (exitInfo) {
    return res.render("join", { titleContent: "Join", errorMessage: "Email and userName is alrady exist" });
  }
  if (password !== confirmPassword) {
    return res.status(400).render("join", { titleContent: "Create Account", errorMessage: "password confirmation does not match" });
  }
  try {
    await User.create({
      email, userName, password, name, location
    });
    return res.redirect("/login");
  }
  catch (error) {
    return res.status(400).render("join", { titleContent: "Join", errorMessage: error._message });
  }
}
export const getLogin = (req, res) => {
  res.render("login", { titleContent: "Login page" })
};
export const postLogin = async (req, res) => {
  const { userName, password } = req.body;
  const titleContent = "Login";
  const user = await User.findOne({ userName });
  if (!user) {
    return res.status(400).render("login", { titleContent, errorMessage: "아이디가 다릅니다." });
  }
  const confirm = await bcrypt.compare(password, user.password);
  if (!confirm) {
    return res.status(400).render("login", { titleContent, errorMessage: "비밀번호가 다릅니다." });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const logout = (req, res) => { res.send("this is a logout page in userRouter") };
export const edit = (req, res) => { res.render("edit", { titleContent: "edit" }) };
export const remove = (req, res) => { res.send("this is a remove page in userRouter") };
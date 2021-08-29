import express from "express";

const PORT = 4000;
const app = express();

const homeMiddleWare = (req, res, next) => {
  console.log(`${req.method}${req.url}`);
  next();
};
const protectionMiddlWare = (req, res, next) => {
  const url = req.url;
  if (url === "/protection") {
    return res.send("you wrtie a wrong url");
  }
  console.log("this is a correct url");
  next();
}
const handleHome = (req, res) => { return res.send("hello, everyone") };
const handleProtected = (req, res) => { return res.send("welcome ti the private lounge") };

app.use(homeMiddleWare);
app.use(protectionMiddlWare);
app.get("/", handleHome);
app.get("/protection", handleProtected);

const handleListening = () => console.log(`✅Server listening on port https://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
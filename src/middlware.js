import multer from "multer";
export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Youtube"
  res.locals.loggedInUser = req.session.user || {};
  next();
}

export const protectorMiddlware = (req, res, next) => {
  if (res.locals.loggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
}

export const publicOnlyMiddleware = (req, res, next) => {
  if (!res.locals.loggedIn) {
    next();
  } else {
    res.redirect("/");
  }
}

export const uploadFiles = multer({ dest: "uploads/" });
import routes from "./routes";
import multer from "multer";

const multerStory = multer({ dest: "stories/" });

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = "Weirdo Expats";
  res.locals.routes = routes;
  next();
};

export const uploadStory = multerStory.single("storyFile");

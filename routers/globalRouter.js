import express from "express";
import routes from "../routes";
import {
  home,
  join,
  login,
  getUpload,
  postUpload,
} from "../controllers/globalControllers";
import { uploadStory } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.upload, getUpload);
globalRouter.post(routes.upload, uploadStory, postUpload);

export default globalRouter;

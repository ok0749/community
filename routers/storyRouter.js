import express from "express";
import routes from "../routes";
import { info } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get(routes.info, info);

export default storyRouter;

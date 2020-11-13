import express from "express";
import routes from "../routes";

const storyRouter = express.Router();

storyRouter.get(routes.stories);

export default storyRouter;

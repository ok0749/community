import express from "express";
import routes from "../routes";
import { home, join, login } from "../controllers/globalControllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);

export default globalRouter;

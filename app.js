import express from "express";
import routes from "./routes";
import path from "path";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";
import { localsMiddlewares } from "./middlewares";

const app = express();

app.engine("ejs", require("express-ejs-extend"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("static"));

app.use(localsMiddlewares);

app.use(routes.home, globalRouter);
// app.use(routes.users, userRouter);
// app.use(routes.stories, storyRouter);

export default app;

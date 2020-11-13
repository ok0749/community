import routes from "./routes";

export const localsMiddlewares = (req, res, next) => {
  res.locals.siteName = "Weirdo Expats";
  res.locals.routes = routes;
  next();
};

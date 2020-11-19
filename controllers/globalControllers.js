import Story from "../models/Story";

export const home = (req, res) => {
  res.render("home");
};

export const join = (req, res) => {
  res.render("join");
};

export const login = (req, res) => {
  res.render("login");
};

export const getUpload = (req, res) => {
  res.render("upload");
};

export const postUpload = async (req, res) => {
  const {
    body: { title, content },
    file: { path },
  } = req;

  const newStory = await Story.create({
    fileUrl: path,
    title,
    content,
  });
  console.log(newStory);
  res.render("upload");
};

import Story from "../models/Story";

export const info = async (req, res) => {
  try {
    const stories = await Story.find({});
    res.render("info", { stories });
  } catch (error) {
    console.log(error);
    res.render("info", { stories: [] });
  }
};

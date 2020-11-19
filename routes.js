//global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";

//users
const USERS = "/users";
const LOGOUT = "/logout";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//stories
const STORIES = "/stories";
const INFO = "/info";
const UPLOAD = "/upload";
const STORY_DETAIL = ":id";
const EDIT_STORIES = "/:id/edit";
const DELETE_STORIES = "/:id/delete";

const routes = {
  //global
  home: HOME,
  join: JOIN,
  login: LOGIN,

  //users
  users: USERS,
  logout: LOGOUT,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: USER_DETAIL,

  //stories
  stories: STORIES,
  info: INFO,
  upload: UPLOAD,
  storyDetail: STORY_DETAIL,
  editStories: EDIT_STORIES,
  deleteStories: DELETE_STORIES,
};

export default routes;

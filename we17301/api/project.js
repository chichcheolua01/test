import instance from "./config";

const deleteCategory = (id) => {
  return instance.delete(`categories/${id}`);
};

const getCategories = () => {
  return instance.get("categories");
};

const updatePost = (post) => {
  return instance.put(`/posts/${post.id}`, post);
};

const deletePost = (id) => {
  return instance.delete(`/posts/${id}`);
};

const getPosts = () => {
  return instance.get("/posts");
};

const getPost = (id) => {
  return instance.get(`/posts/${id}`);
};

const getConfig = () => {
  return instance.get("/config");
};

const getMenuList = () => {
  return instance.get("/menuList");
};

const getProjects = () => {
  return instance.get("/projects");
};

const getProject = (id) => {
  return instance.get(`/projects/${id}`);
};

const updateProject = (project) => {
  return instance.put(`/projects/${project.id}`, project);
};

const addProject = (project) => {
  return instance.post("/projects", project);
};

const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};

export {
  deleteCategory,
  getCategories,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  getProject,
  getProjects,
  updateProject,
  addProject,
  deleteProject,
  getMenuList,
  getConfig,
};

import instance from "./config";

const getProjectCategory = () => {
  return instance.get("/projectCategories");
}

const deleteMenuList = () => {
  return instance.delete(`/menuList/${id}`)
}

const getMenuList = () => {
  return instance.get(`/menuList/${id}`)
}

const getAbout = () => {
  return instance.get("/about")
}

const addCategory = (category) => {
  return instance.post("/categories", category)
}

const updateCategory = (category) => {
  return instance.put(`categories/${category.id}`, category)
}

const getCategory = (id) => {
  return instance.get(`categories/${id}`)
}

const deleteCategory = (id) => {
  return instance.delete(`categories/${id}`);
};

const getCategories = () => {
  return instance.get("categories");
};

const addPost = (post) =>{
  return instance.post("/posts", post)
}

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

const getMenuLists = () => {
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
  getProjectCategory,
  getAbout,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getCategories,
  addPost,
  updatePost,
  deletePost,
  getPost,
  getPosts,
  getProject,
  getProjects,
  updateProject,
  addProject,
  deleteProject,
  deleteMenuList,
  getMenuList,
  getMenuLists,
  getConfig,
};

// import instance from "./config";

// const getProjects = () => {
//   return instance.get("/projects");
// };
// const getProject = (id) => {
//   return instance.get(`/projects/${id}`);
// };
// const addProject = (project) => {
//   return instance.post("/projects", project);
// };
// const deleteProject = (id) => {
//   return instance.delete(`/projects/${id}`);
// };
// const updateProject = (project) => {
//   return instance.put(`/projects/${project.id}`, project);
// };

// export { getProjects, getProject, addProject, deleteProject, updateProject };

import instance from "./config";

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
  getProject,
  getProjects,
  updateProject,
  addProject,
  deleteProject,
  getMenuList,
  getConfig,
};

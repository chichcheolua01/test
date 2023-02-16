import { render, router } from "./lib";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutPage from "./pages/about";
import AdminProjectsPage from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PostDetailPage from "./pages/post-detail";
import PostsPage from "./pages/posts";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";
import AdminAddProjectPage from "./pages/admin/add-project";
import AdminEditProjectsPage from "./pages/admin/edit-project";
import AdminPostsPage from "./pages/admin/posts";
import AdminAddPostPage from "./pages/admin/add-post";
import AdminEditPostPage from "./pages/admin/edit-post";
import AdminCategoriesPage from "./pages/admin/categories";
import AdminEditCategoryPage from "./pages/admin/edit-category";
import AdminAddCategoryPage from "./pages/admin/add-category";

const app = document.querySelector("#app");
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", (params) => render(() => PostDetailPage(params), app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/projects/:id", (params) =>
  render(() => ProjectDetailPage(params), app)
);

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectPage, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminEditProjectsPage(data), app)
);
router.on("/admin/posts", () => render(AdminPostsPage, app));
router.on("/admin/posts/add", () => render(AdminAddPostPage, app));
router.on("/admin/posts/:id/edit", ({ data }) =>
  render(() => AdminEditPostPage(data), app)
);

router.on("/admin/categories/add", () => render(AdminAddCategoryPage, app))
router.on("/admin/categories", () => render(AdminCategoriesPage, app));
router.on("/admin/categories/:id/edit", ({data}) =>
  render(() => AdminEditCategoryPage(data), app)
);

router.resolve();

import { getProject, updateProject } from "../../api/project";
import Aside from "../../components/Aside";
import { router, useEffect, useState } from "../../lib";

const AdminEditProjectsPage = ({ id }) => {
  // kiểm tra localStorage có dữ liệu không?
  // nếu có thì lấy dữ liệu
  // ngược lại thì gán mảng rỗng
  const [project, setProject] = useState({});

  useEffect(() => {
    getProject(id).then((data) => setProject(data));
  }, []);

  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    const projectContent = document.getElementById("project-content");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      const formData = {
        id,
        name: projectName.value,
        content: projectContent.value,
        img: "https://picsum.photos/400/400",
      };

      updateProject(formData).then(() => {
        history.replaceState({}, null, "/#/admin/projects");
        router.resolve();
      });
      // chuyển hướng về trang quản lý dự án
    });
  });
  return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${project.name}" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Nội dung dự án</label>
                <input type="text" class="form-control" id="project-content" value="${project.content}" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminEditProjectsPage;

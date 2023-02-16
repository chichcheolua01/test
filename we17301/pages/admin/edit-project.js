import { getProject, updateProject } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
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
    const form = document.getElementById("form-edit");
    const projectName = document.getElementById("project-name");
    const projectContent = document.getElementById("project-content");
    const projectImage = document.getElementById("project-img");
    const projectLink = document.getElementById("project-link")

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      const formData = {
        id,
        name: projectName.value,
        content: projectContent.value,
        img: projectImage.value,
        projectLink: projectLink.value
      };

      updateProject(formData).then(() => {
        history.replaceState({}, null, "/#/admin/projects");
        router.resolve();
      });
      // chuyển hướng về trang quản lý dự án
    });
  });
  return `
    <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      ${Banner()}
      <div class="flex justify-center">
      <form id="form-edit" class="bg-white p-6 rounded-lg w-1/2 shadow-md">
        <h2 class="text-lg font-medium mb-4">Edit Project</h2>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Project's Name
            </label>
            <input id="project-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              project.name
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="content">
            Post's Content
            </label>
            <textarea id="project-content" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="content" placeholder="Post Content">${
              project.content
            }</textarea>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Project's Image
            </label>
            <input id="project-img" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              project.img
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Project's Image
            </label>
            <input id="project-link" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              project.projectLink
            }">
        </div>
        <div class="flex items-center justify-end">
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-full" type="submit">
            Submit
            </button>
        </div>
        </form>
        </div>
          <!-- -->
        </div>
      </div>
    </div>
  
      `;
};

export default AdminEditProjectsPage;

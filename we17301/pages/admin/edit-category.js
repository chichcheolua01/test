import { getCategory, updateCategory } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect, useState } from "../../lib";

const AdminEditCategoryPage = ({ id }) => {
  // kiểm tra localStorage có dữ liệu không?
  // nếu có thì lấy dữ liệu
  // ngược lại thì gán mảng rỗng
  const [category, setCategory] = useState({});
  useEffect(() => {
    getCategory(id).then((data) => setCategory(data));
  }, []);

  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  useEffect(() => {
    const form = document.getElementById("form-edit");
    const categoryName = document.getElementById("category-name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // tạo ra 1 object mới lấy dữ liệu từ form
      const formData = {
        id,
        name: categoryName.value,
      };

      updateCategory(formData).then(() => {
        history.replaceState({}, null, "/#/admin/categories");
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
            Post's Title
            </label>
            <input id="category-name" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              category.name
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

export default AdminEditCategoryPage;

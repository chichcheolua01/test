import Aside from "../../components/Aside";
import { useEffect, useState } from "../../lib";
import Banner from "../../components/Banner";
import { deleteCategory, getCategories } from "../../api/project";

const AdminCategoriesPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategories().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const newData = data.filter((category) => category.id != id);
        setData(newData);
        deleteCategory(id);
      });
    }
  });

  return `
      <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      ${Banner()}
<table class="table-auto w-full text-left">
  <thead>
    <tr class="bg-gray-300 text-cyan-500">
      <th class="px-4 py-2">#</th>
      <th class="px-4 py-2">Name</th>
      <th class="px-4 py-2">Action</th>
    </tr>
  </thead>
      <tbody>
      ${data
        .map(function (category, index) {
          return `
        <tr class="bg-gray-100">
      <td class="border px-4 py-2">${index + 1}</td>
      <td class="border px-4 py-2">${category.name}</td>
      <td class="border px-4 py-2">
        <a href="/#/admin/categories/${
          category.id
        }/edit"><button class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded btn-edit">Edit</button></a>
        <button data-id="${
          category.id
        }" class="bg-gray-300 hover:bg-gray-400 text-cyan-500 hover:text-white py-2 px-4 rounded ml-4 btn-remove">Delete</button>
      </td>
    </tr>
        `;
        })
        .join("")}
       
      </tbody>
    </table>
          <!-- -->
        </div>
      </div>
    </div>

  `;
};

export default AdminCategoriesPage;

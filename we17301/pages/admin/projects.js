import { deleteProject, getProject, getProjects } from "../../api/project";
import Aside from "../../components/Aside";
import { useEffect, useState } from "../../lib";
import Buttons from "../../components/Buttons";
import Banner from "../../components/Banner";

const AdminProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const newData = data.filter((project) => project.id != id);
        setData(newData);
        deleteProject(id);
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
      <th class="px-4 py-2">Content</th>
      <th class="px-4 py-2">Team</th>
      <th class="px-4 py-2">Action</th>
    </tr>
  </thead>
      <tbody>
      ${data
        .map(function (project, index) {
          return `
              <tr class="bg-gray-100">
            <td class="border px-4 py-2">${index + 1}</td>
            <td class="border px-4 py-2">${project.name}</td>
            <td class="border px-4 py-2">${project.content}</td>
            <td class="border px-4 py-2">${index}</td>
            <td class="border px-4 py-2">
              <a class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded btn-edit" href="/#/admin/projects/${
                project.id
              }/edit">Edit</a>
              <button data-id="${
                project.id
              }" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-4 btn-remove">Delete</button>
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

export default AdminProjectsPage;

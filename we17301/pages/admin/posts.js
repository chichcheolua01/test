import Aside from "../../components/Aside";
import { useState } from "../../lib";

const AdminPostsPage = () => {
  const [data, setData] = useState([]);
  return `
  <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      <div class="col-span-4 flex flex-col space-y-[20px]">
        <header class="">
          <div class="w-full">
            <img
              class="w-full h-[150px]"
              src="../images/dashboard-banner.jpeg"
              alt=""
            />
          </div>
        </header>
        <div>
<table class="table-auto w-full text-left">
  <thead>
    <tr class="bg-gray-300 text-cyan-600">
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
        <a href="/admin/projects/${
          project.id
        }/edit"><button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded btn-edit">Edit</button></a>
        <button class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-4 btn-remove">Delete</button>
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
    </div>`;
};

export default AdminPostsPage;

import { deletePost, getPosts } from "../../api/project";
import Aside from "../../components/Aside";
import { useEffect, useState } from "../../lib";

const AdminPostsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const newData = data.filter((post) => post.id != id);
        setData(newData);
        deletePost(id);
      });
    }
  });
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
    <tr class="bg-gray-300 text-cyan-500">
      <th class="px-4 py-2">#</th>
      <th class="px-4 py-2">Title</th>
      <th class="px-4 py-2">Content</th>
      <th class="px-4 py-2">Team</th>
      <th class="px-4 py-2">Action</th>
    </tr>
  </thead>
      <tbody>
      ${data
        .map(function (post, index) {
          return `
        <tr class="bg-gray-100">
      <td class="border px-4 py-2">${index + 1}</td>
      <td class="border px-4 py-2">${post.title}</td>
      <td class="border px-4 py-2">${post.content.slice(0, 30)}</td>
      <td class="border px-4 py-2">${index}</td>
      <td class="border px-4 py-2">
        <a href="/admin/projects/${
          post.id
        }/edit"><button class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded btn-edit">Edit</button></a>
        <button data-id="${
          post.id
        }" class="bg-cyan-400 hover:bg-cyan-600 text-white py-2 px-4 rounded ml-4 btn-remove">Delete</button>
      </td>
    </tr>
        `;
        })
        .join("")}
       
      </tbody>
    </table>
        </div>
      </div>
    </div>`;
};

export default AdminPostsPage;

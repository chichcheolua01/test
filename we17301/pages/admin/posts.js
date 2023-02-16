import { deletePost, getPosts } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { useEffect, useState } from "../../lib";

const AdminPostsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setData(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
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
      ${Banner()}
      <div class="flex justify-end mb-3 mr-3">
      <a href="/#/admin/posts/add">
      <button class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ml-4">Add</button></a></div>
<table class="table-auto w-full text-left">
  <thead>
    <tr class="bg-gray-300 text-cyan-500">
      <th class="px-4 py-2">#</th>
      <th class="px-4 py-2">Title</th>
      <th class="px-4 py-2">Content</th>
      <th class="px-4 py-2">Create Date</th>
      <th class="px-4 py-2">Author</th>
      <th class="px-4 py-2">Category</th>
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
          <td class="border px-4 py-2">${post.createAt}</td>
          <td class="border px-4 py-2">${post.author}</td>
          <td class="border px-4 py-2">${post.categoryId}</td>
          <td class="border flex flex-col px-4 py-2">
                  <a class="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded btn-edit no-underline" href="/#/admin/posts/${
                    post.id
                  }/edit">Edit</a>
            <button data-id="${
              post.id
            }" class="bg-gray-300 hover:bg-gray-400 text-cyan-500 hover:text-white py-2 px-4 rounded mt-[4px] btn-remove">Delete</button>
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

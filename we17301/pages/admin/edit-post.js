import { getPost, updatePost } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect, useState } from "../../lib";

const AdminEditPostPage = ({ id }) => {
  const [post, setPost] = useState({});
  const [contents, setContents] = useState([]);
  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
      console.log(data.content);
      setContents(data.content);
    });
  }, []);
  useEffect(() => {
    const form = document.getElementById("edit-form");
    const editPostContent1 = document.getElementById("edit-post-content1");
    const editPostContent2 = document.getElementById("edit-post-content2");
    const editPostContent3 = document.getElementById("edit-post-content3");
    const editPostContent4 = document.getElementById("edit-post-content4");
    const editPostContentImg1 = document.getElementById(
      "edit-post-content-img1"
    );
    const editPostContentImg2 = document.getElementById(
      "edit-post-content-img2"
    );
    const editPostContentImg3 = document.getElementById(
      "edit-post-content-img3"
    );
    const editPostContentImg4 = document.getElementById(
      "edit-post-content-img4"
    );
    const editPostTitle = document.getElementById("edit-post-title");
    const editPostCreateTime = document.getElementById("edit-post-create-time");
    const editPostAuthor = document.getElementById("edit-post-author");
    const editPostCategory = document.getElementById("edit-post-category");
    const editPostExcept = document.getElementById("edit-post-except");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        id,
        title: editPostTitle.value,
        content: [
          {
            id: "1",
            content: editPostContent1.value,
            img: editPostContentImg1.value,
          },
          {
            id: "2",
            content: editPostContent2.value,
            img: editPostContentImg2.value,
          },
          {
            id: "3",
            content: editPostContent3.value,
            img: editPostContentImg3.value,
          },
          {
            id: "4",
            content: editPostContent4.value ? editPostContent4.value : "",
            img: editPostContentImg4.value ? editPostContentImg4.value : "",
          },
        ],
        createAt: editPostCreateTime.value,
        author: editPostAuthor.value,
        except: editPostExcept.value,
        categoryId: editPostCategory.value,
      };

      console.log(formData);
      updatePost(formData).then(() => {
        history.replaceState("", null, "/#/admin/posts");
        router.resolve();
      });
    });
  });
  return `
  <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      ${Banner()}
      <div class="flex justify-center">
      <form id="edit-form" class="bg-white p-6 rounded-lg w-1/2 shadow-md">
        <h2 class="text-lg font-medium mb-4">Edit a New Post</h2>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Post's Title
            </label>
            <input id="edit-post-title" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.title
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="content">
            Post's Content
            </label>
            ${contents.map((content) => {
              return `<textarea id="edit-post-content${content.id}" class="bg-gray-200 h-[200px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" placeholder="Post Content">${content.content}</textarea>
                      <input id="edit-post-content-img${content.id}" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${content.img}">
              `;
            })}
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Create At
            </label>
            <input id="edit-post-create-time" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.createAt
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Author
            </label>
            <input id="edit-post-author" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.author
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Except
            </label>
            <input id="edit-post-except" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.except
            }">
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="title">
            Post Categories
            </label>
            <input id="edit-post-category" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.categoryId
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

export default AdminEditPostPage;

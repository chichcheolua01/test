import { getPost, updatePost } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect, useState } from "../../lib";

const AdminEditPostPage = ({ id }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(id).then((data) => setPost(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("edit-form");
    const editPostContent = document.getElementById("edit-post-content");
    const editPostTitle = document.getElementById("edit-post-title");
    const editPostCreateTime = document.getElementById("edit-post-create-time");
    const editPostAuthor = document.getElementById("edit-post-author");
    const editPostCategory = document.getElementById("edit-post-category");
    form.addEventListener("submit", function () {
      const formData = {
        id,
        title: editPostTitle.value,
        content: editPostContent.value,
        postFeartureImage: {
          img1: "post1-img1.png",
          img2: "post1-img2.png",
          img3: "post1-img3.png",
          img4: "post1-img4.png",
        },
        createAt: editPostCreateTime.value,
        author: editPostAuthor.value,
        except: "",
        category: editPostCategory.value,
      };
      console.log(formData);
      updatePost(formData).then(() => {
        router.navigate("/#/admin/posts")
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
            <textarea id="edit-post-content" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="content" placeholder="Post Content">${
              post.content
            }</textarea>
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
            Post Categories
            </label>
            <input id="edit-post-category" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cyan-500" id="title" type="text" value="${
              post.category
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

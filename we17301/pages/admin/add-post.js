import { addPost } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect } from "../../lib";

const AdminAddPostPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add")
    const newPostContent = document.getElementById("new-post-content");
    const newPostTitle = document.getElementById("new-post-title");
    const newPostCreateTime = document.getElementById("new-post-create-time");
    const newPostAuthor = document.getElementById("new-post-author");
    const newPostCategory = document.getElementById("new-post-category");
    const newPostExcept = document.getElementById("new-post-except")
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        title: newPostTitle.value,
        content: newPostContent.value,
        createAt: newPostCreateTime.value,
        author: newPostAuthor.value,
        except: newPostExcept.value,
        categoryId: newPostCategory.value,
      };
      console.log(formData);
      addPost(formData).then(() => {
        history.replaceState({}, null, "/#/admin/posts");
        router.resolve();
      });
    });
  });

  return `    
  <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      ${Banner()}
          <form id="form-add">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="post_title">
                Post Title
              </label>
              <input id="new-post-title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter post title">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="post_content">
                Post Content
              </label>
              <textarea id="new-post-content" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter post content"></textarea>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="create_time">
                Create Time
              </label>
              <input id="new-post-create-time" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="" placeholder="Enter create time">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
                Author
              </label>
              <input id="new-post-author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter author name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="author">
                Except
              </label>
              <input id="new-post-except" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter post except">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="category">
                Category
              </label>
              <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="new-post-category">
                <option value="">Select category</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    `;
};

export default AdminAddPostPage;

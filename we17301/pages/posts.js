import { getAbout, getCategories, getPost, getPosts } from "../api/project";
import UserFooter from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
import UserPostCategory from "../components/UserPostCategory";
import UserPosts from "../components/UserPosts";
import { useEffect, useState } from "../lib";

const PostsPage = () => {
  const [about, setAbout] = useState({});
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getPosts().then((post) => setPosts(post));
  }, []);
  useEffect(() => {
    getAbout().then((about) => {
      setAbout(about);
    });
  }, []);
  useEffect(() => {
    getCategories().then((category) => setCategories(category));
  }, []);
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categories/${id}?_embed=posts`)
      .then((response) => response.json())
      .then((data) => {setPosts(data.posts); console.log(data)});
  };
  return /* html */ `
  ${UserHeader()}
  <main class="px-10 py-10 mt-[50px]">
    <section class="w-3/4">
      <p class="text-5xl text-black font-semibold mb-[30px] pr-[50px]">${
        about.postPageTitle ? about.postPageTitle : ""
      }</p>
      <p class="text-gray-500">${
        about.postPageContent ? about.postPageContent : ""
      }</p>
    </section>
    <section class="flex mt-10 border-l-[1px] p-6 space-x-[20px]">  
      <div>
        ${UserPostCategory({ categories, onClick: onHandleClick })}
      </div>
        <div>
        ${UserPosts({ posts })}
      </div>
    </section>
  </main>
  ${UserFooter()}
  `;
};

export default PostsPage;

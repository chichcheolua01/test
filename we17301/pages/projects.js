import { getAbout, getProjectCategory, getProjects } from "../api/project";
import UserFooter from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
import UserProjectCategory from "../components/UserProjectCategory";
import UserProjects from "../components/UserProjects";
import { useEffect, useState } from "../lib";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [about, setAbout] = useState({});
  const [projectCategories, setProjectCategories] = useState([])
  useEffect(() => {
    getProjectCategory().then((projectCategory) => setProjectCategories(projectCategory))
  }, [])
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);
  useEffect(() => {
    getAbout().then((about) => {
      setAbout(about);
    });
  }, []);
  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/projectCategories/${id}/?_embed=projects`)
      .then((response) => response.json())
      .then((project) => setProjects(project));
  };
  return /* html */ `
  ${UserHeader()}
  <main class="px-10 py-10 mt-[50px]">
    <section class="w-3/4">
      <p class="text-5xl text-black font-semibold mb-[30px] pr-[100px]">${
        about.goalTitle ? about.goalTitle : ""
      }</p>
      <p class="text-gray-500">${about.goalContent}</p>
    </section>
    <section class="flex mt-10 border-l-[1px] p-6 space-x-[20px]">  
      <div>
        ${UserProjectCategory({ projectCategories, onClick: onHandleClick })}
      </div>
        <div>
        ${UserProjects({ projects })}
      </div>
    </section>
  </main>
  ${UserFooter()}
  `;
};
//   ${data
//     .map((project) => {
//       `      <div class="w-full lg:w-1/3 p-3">
//   <div class="bg-white p-6 rounded-lg shadow-md">
//     <h2 class="text-lg font-bold mb-5 text-cyan-600">${project.name}</h2>
//     <p class="text-gray-700 mb-5">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan metus velit, vel congue velit
//       bibendum vel.
//     </p>
//     <a class="bg-cyan-600 p-2 rounded-lg hover:bg-cyan-700 text-white" href="#">Learn More</a>
//   </div>
// </div> `;
//     })
//     .join("")}
export default ProjectsPage;

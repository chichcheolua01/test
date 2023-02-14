import { getProjects } from "../api/project";
import { useEffect, useState } from "../lib";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  if (!data) return null;
  return `<header class="bg-cyan-600 p-6 flex justify-between items-center text-white">
    <h1 class="text-2xl font-bold">My Projects</h1>
  </header>
  <main class="px-10 py-10">
    <section class="flex flex-wrap">
    ${data
      .map(
        (item) => `
        <div class="w-full lg:w-1/3 p-3">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h2 class="text-lg font-bold mb-5 text-cyan-600">${item.name}</h2>
              <p class="text-gray-700 mb-5">
                ${item.content}
              </p>
              <a class="bg-cyan-600 p-2 rounded-lg hover:bg-cyan-700 text-white" href="#">Learn More</a>
            </div>
          </div>
    `
      )
      .join("")}
      
    </section>
  </main>`;
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

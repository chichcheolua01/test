import { getAbout, getProjects } from "../api/project";
import UserHeader from "../components/UserHeader";
import { useEffect, useState } from "../lib";

const ProjectsPage = () => {
  const [data, setData] = useState([]);
  const [about, setAbout] = useState({});
  const [goal, setGoal] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  useEffect(() => {
    getAbout().then((about) => {
      setAbout(about);
    });
  }, []);
  if (!data) return null;
  return /* html */ `
  ${UserHeader()}
  <main class="px-10 py-10 mt-[50px]">
    <section class="w-3/4">
      <p class="text-5xl text-black font-semibold mb-[30px] pr-[100px]">${
        about.goalTitle
      }</p>
      <p class="text-gray-500">${about.goalContent}</p>
    </section>
    <section class="flex flex-wrap">
    ${data
      .map(
        (item) => `
        <div class="w-full lg:w-1/3 p-3">
          <a class="no-underline" href="#/projects/${item.id}">
            <div class="p-6 rounded-lg hover:bg-[#FFF9F9] flex flex-col justify-between">
              <div>
                <div class="flex mb-[20px]">
                  <div class="bg-gray-100 p-[10px] rounded-full">
                    <img src="./images/${item.img}" class="w-[40px] h-[40px] object-fit rounded-full">
                  </div>
                </div>
                <div>
                  <h2 class="text-lg font-normal text-black">${item.name}</h2>
                  <p class="text-gray-500 text-sm mb-5">
                    ${item.content}
                  </p>
                </div>
              </div>
              <div class="p-6">
                <div class="flex space-x-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-[1.5px] w-4 h-4 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                  <p class="text-gray-400 text-sm">${item.projectLink}</p>
                </div>
              </div>
            </div>
            
          </a>
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

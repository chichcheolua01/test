import { getProject } from "../api/project";
import ProjectMenuButtons from "../components/ProjectMenuButtons";
import UserComment from "../components/UserComment";
import UserFooter from "../components/UserFooter";
import UserHeader from "../components/UserHeader";
import { useEffect, useState } from "../lib";

const ProjectDetailPage = ({ data: id }) => {
  const [project, setProject] = useState({});
  const [contents, setContents] = useState([])
  const newId = id;
  useEffect(() => {
    const { id } = newId;
    getProject(id).then((data) => {setProject(data); setContents(data.content)});
  }, []);
  return /* html */ `
    ${UserHeader()}
    <section class="mt-[100px] px-[50px] lg:px-[200px]">
      <div class="border-l-[1px] px-[20px]">
        <p class="text-gray-500">${project.createAt}</p>
      </div>
      <h2 class="text-5xl">${project.name}</h2>
      <div class="mt-10"> 
        ${contents
          .map((content) => {
            return `
          <div class="mb-10">
            <p class="text-gray-500 text-lg">${content.content}</p>
            <img class="rounded-3xl" src="./images/${content.img}">
          </div>
          `;
          })
          .join("")}
      </div>
    </section>
    <div class="mt-10">
      ${UserFooter()} 
    </div>
  `;
};

export default ProjectDetailPage;

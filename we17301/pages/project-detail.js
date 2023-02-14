import { getProject } from "../api/project";
import ProjectMenuButtons from "../components/ProjectMenuButtons";
import UserComment from "../components/UserComment";
import { useEffect, useState } from "../lib";

const ProjectDetailPage = ({ data: id }) => {
  const [data, setData] = useState({});
  const newId = id;
  useEffect(() => {
    const { id } = newId;
    getProject(id).then((data) => setData(data));
  }, []);
  return `<body class="bg-white h-screen">
  <header class="bg-[#7B1FA2] p-6 flex justify-between items-center text-white">
    <h1 class="text-2xl font-bold">Project Information</h1>
    ${ProjectMenuButtons()}
  </header>
  <main class="px-10 py-10">
    <section id="about" class="my-10">
      <h2 class="text-xl font-bold mb-5 text-[#7B1FA2]">About the Project</h2>
      <p class="text-gray-700">
        ${data.content}
      </p>
    </section>
    <section id="features" class="my-10">
      <h2 class="text-xl font-bold mb-5 text-[#7B1FA2]">Features</h2>
      <ul class="text-gray-700">
        <li class="mb-2">Feature 1</li>
        <li class="mb-2">Feature 2</li>
        <li class="mb-2">Feature 3</li>
      </ul>
    </section>
    ${UserComment()}

            </main>
            <footer class="bg-white p-6">
              <p class="text-gray-700 text-center">&copy; 2023 Project Information</p>
            </footer>
          </body>`;
};

export default ProjectDetailPage;

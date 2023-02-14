import { getConfig } from "../api/project";
import { useEffect, useState } from "../lib";

const Aside = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getConfig().then((data) => setData(data));
  }, []);
  return `
        <aside class="flex flex-col h-screen space-y-[20px]">
        <div class="bg-white p-5 h-[150px]">
          <img
            class="overflow-hidden max-h-[150px]"
            src="../images/dashboard-logo.png"
            alt=""
          />
        </div>
       <nav class="p-4">
  <ul class="text-white">
  ${data
    .map((config) => {
      return `    <li class="mb-2">
      <a class="p-2 duration-500 font-medium text-sm text-gray-500 hover:text-[#7B1FA2] rounded flex items-start space-x-[10px] no-underline" href="/#${config.path}"><p>${config.icon}</p> <p>${config.name}</p>  </a>
    </li>`;
    })
    .join("")}

  </ul>
</nav>
      </aside>
      `;
};

export default Aside;

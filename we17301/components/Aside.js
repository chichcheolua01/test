import { getConfig } from "../api/project";
import { useEffect, useState } from "../lib";

const Aside = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getConfig().then((data) => setData(data));
  });
  return `
        <aside class="flex flex-col space-y-[20px]">
        <div class="bg-white p-5 h-[150px]">
          <img
            class="overflow-hidden max-h-[150px]"
            src="../images/dashboard-logo.png"
            alt=""
          />
        </div>
        <div class="flex justify-center">
          <div class="w-full flex flex-col space-y-[10px] pl-[10px]">
          <p class="text-sm">Admin tools</p>
          ${data
            .map(
              (config) => `<a href="${config.path}" class="no-underline">
              <div
                class="flex justify-start items-center py-[10px] rounded-lg"
              >
                <div class="hover:text-cyan-500 text-gray-500 flex items-center font-nm h-full space-x-[5px]"> <p>${config.icon}</p><p>${config.name}</p> </div>
              </div>
            </a>`
            )
            .join("")}
          </div>
        </div>
      </aside>
      `;
};

export default Aside;

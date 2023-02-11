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
          <div class="w-full flex flex-col space-y-[10px]">
          ${data
            .map(
              (config) => `<a href="${config.path}" class="no-underline">
              <div
                class="flex justify-center items-center bg-slate-200 py-[10px] rounded-lg"
              >
                <div class="text-cyan-600 font-bold h-full">${config.name}</div>
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

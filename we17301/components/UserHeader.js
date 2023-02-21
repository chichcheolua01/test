import { getMenuLists } from "../api/project";
import { useEffect, useState } from "../lib";

const UserHeader = () => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    getMenuLists().then((menuList) => setMenuList(menuList));
  }, []);
  return `  <nav class=" py-4 top-0 right-0 left-0">
    <div class="container mx-auto lg:flex lg:justify-between items-center">
      <a href="#" class="text-purple-900 font-thin text-4xl no-underline hidden lg:block">Portfolio</a>
      <div class="flex justify-center">
        <ul class="flex space-x-[20px] border-purple-100 shadow-xl text-sm px-[40px] py-[5px] rounded-2xl border-[0.3px]">
        ${menuList
          .map((data) => {
            return `
            <li>
              <a href="/#${data.path}" class=" text-black hover:border-b-[1px] hover:border-purple-800 py-[7px] no-underline">
                <button class="focus:border-purple-800">${data.name}</button>
              </a>
            </li>`;
          })
          .join("")}
        </ul>
      </div>
      <a class="hidden lg:block">
        <button id="change-theme-button" class="mr-[100px]">
          <div class="border p-[5px] rounded-3xl px-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" class="w-6 h-6 fill-purple-900">
              <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
            </svg>
          </div>
        </button>
      </a>
    </div>
  </nav>`;
};

export default UserHeader;

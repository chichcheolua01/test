import { getMenuList } from "../api/project";
import { useEffect, useState } from "../lib";

const UserHeader = () => {
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        getMenuList().then((menuList) => setMenuList(menuList));
    }, []);
  return `  <nav class=" py-4 top-0 right-0 left-0">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-purple-900 font-thin text-4xl no-underline">Portfolio</a>
      <ul class="flex space-x-[20px] border-purple-100 shadow-xl text-sm px-[40px] py-[5px] rounded-2xl border-[0.3px]">
      ${menuList
        .map((data) => {
          return `<li><a href="/#${data.path}" class="text-purple-900 hover:text-black hover:border-b-[1px] hover:border-purple-800 py-[7px] no-underline"><button class="">${data.name}</button></a></li>`;
        })
        .join("")}
        
      </ul>
      <a class="">
        <button id="change-theme-button" class="mr-[100px]">
          <div class="border p-[5px] rounded-3xl px-[10px]">
            <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden"><path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path><path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path></svg><svg viewBox="0 0 24 24" aria-hidden="true" class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"></svg>
          </div>
        </button>
      </a>
    </div>
  </nav>`;
  
}

export default UserHeader
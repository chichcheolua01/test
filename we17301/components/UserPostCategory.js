import { useEffect } from "../lib";

const UserPostCategory = ({ categories, onClick }) => {
    useEffect(() => {
      const btns = document.querySelectorAll(".category-btn");
      for (let btn of btns) {
        btn.addEventListener("click", function () {
          const id = btn.dataset.id;
          onClick(id);
        });
      }
    });
  return `<div class="flex flex-col space-y-[10px]">
    ${categories
      .map((category) => {
        return `
        <div class="rounded-2xl w-full">
          <button class="category-btn" class="flex items-center justify-center" data-id="${category.id}">
            <div class="flex space-x-[10px] group">
              <p class="group-hover:text-teal-500 duration-300"> ${category.icon}</p> 
              <p class="font-semibold text-lg group-hover:text-teal-500 duration-300">${category.name}</p>
            </div>
          </button>
        </div>`;
      })
      .join("")}
  </div>`;
};

export default UserPostCategory;

const UserPosts = ({posts}) => {
  return `<div class="flex flex-col rounded-2xl space-y-[20px]">
    ${posts.map((post) => {
      return `
      <a href="#/posts/${post.id}" class="no-underline">
        <div class="rounded-2xl hover:bg-[#FFF9F9] p-[20px] flex flex-col">
          <p class="border-l-[1px] text-gray-500 px-[10px] ">${post.createAt}</p>
          <p class="font-semibold text-black">${post.title}</p>
          <p class="text-gray-500 text-sm">${post.except}</p>
          <div>
            <div class="flex items-center"><div class="text-teal-500 text-sm"> Watch post </div> <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current text-teal-500"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
          </div>
        </div>
        </a>`;
    }).join("")}
  </div>`;
  
}

export default UserPosts
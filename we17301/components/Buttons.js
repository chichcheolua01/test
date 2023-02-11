const Buttons = (path, project) => {
  return `
        <a href="/admin/${path}/${project.id}/edit">
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded btn-edit">Edit</button>
        </a>
        <button data-id="${project.id}" class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-4 btn-remove">Delete</button>`;
};

export default Buttons;

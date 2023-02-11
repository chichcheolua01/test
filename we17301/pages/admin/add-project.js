import { addProject } from "../../api/project";
import { router, useEffect, useState } from "../../lib";

const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const newName = document.getElementById("new-name");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: newName.value,
        img: "https://picsum.photos/400/400",
      };
      addProject(formData).then((data) => router.navigate("/admin/projects"));
    });
  });

  return `    
    <form action="" id="form-add" class="flex flex-col space-y-[10px]">
      <div class="form-group">
        <label for="" class="label">Project Name</label>
        <input type="text" name="" id="new-name" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" id="btn-add">Add</button>
      </div>
    </form>`;
};

export default AdminAddProjectPage;

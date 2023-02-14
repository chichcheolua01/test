import { addProject } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect, useState } from "../../lib";

const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const newName = document.getElementById("new-name");
    const newContent = document.getElementById("new-content");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: newName.value,
        content: newContent.value,
        img: "https://picsum.photos/400/400",
      };
      addProject(formData).then(() => {
        history.replaceState({}, null, "/#/admin/projects");
        router.resolve();
      });
    });
  });

  return `    
  <div class="grid grid-cols-5 gap-[20px] grid-rows-2">
      ${Aside()}
      ${Banner()}
              <form action="" id="form-add" class="flex flex-col space-y-[10px]">
      <div class="form-group">
        <label for="" class="label">Project Name</label>
        <input type="text" name="" id="new-name" class="form-control">
      </div>
      <div class="form-group">
        <label for="" class="label">Project Content</label>
        <input type="text" name="" id="new-content" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" id="btn-add">Add</button>
      </div>
    </form>
        </div>
      </div>
    </div>

    `;
};

export default AdminAddProjectPage;

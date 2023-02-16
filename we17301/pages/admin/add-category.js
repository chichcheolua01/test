import { addCategory } from "../../api/project";
import Aside from "../../components/Aside";
import Banner from "../../components/Banner";
import { router, useEffect } from "../../lib";

const AdminAddCategoryPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const newName = document.getElementById("new-name");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = {
        name: newName.value,
      };
      addCategory(formData).then(() => {
        history.replaceState("", null, "/#/admin/categories");
        router.resolve();
        //console.log(formData)
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
              <button class="btn btn-primary" id="btn-add">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    `;
};

export default AdminAddCategoryPage;

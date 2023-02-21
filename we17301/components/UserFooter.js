import { getMenuLists } from "../api/project"
import { useEffect, useState } from "../lib"

const UserFooter = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        getMenuLists().then((menu) => setMenu(menu))
    },[])
    return `
        <hr>
        
        <div class="flex mt-[40px] space-x-[20px]">
            ${menu.map((menu) =>{
                return `<a href="/#${menu.path}" class="no-underline"><p class="text-sm text-gray-700">${menu.name}</p></a>`;
            }).join("")}
        </div>`
  
}

export default UserFooter
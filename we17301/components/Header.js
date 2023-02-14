import { getMenuList } from "../api/project";
import { useEffect, useState } from "../lib";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getMenuList().then((data) => {
      setData(data);
    },[]);
  }, []);
  return `${data
    .map((menuList) => `<a href="/#${menuList.path}">${menuList.name}</a>`)
    .join("")}`;
};

export default Header;

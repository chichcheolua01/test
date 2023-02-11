import { useEffect, useState } from "../lib";

const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menuList")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return `${data
    .map((menuList) => `<a href="${menuList.path}">${menuList.name}</a>`)
    .join("")}`;
};

export default Header;

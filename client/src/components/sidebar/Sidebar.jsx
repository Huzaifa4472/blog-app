import { useState, useEffect } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1603134281085-cf0c4b61a65d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt=""
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
          nesciunt cum, perspiciatis similique tempore rerum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cats=${c.name}`} className="link">
              <li className="listItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}

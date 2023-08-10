import { Link } from "react-router-dom";

import "./topBar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toplistitem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/About">
              ABOUT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/Contact">
              CONTACT
            </Link>
          </li>
          <li className="toplistitem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          <li className="toplistitem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topimage"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="toplistitem">
              {" "}
              <Link className="link" to="/Login">
                LOGIN
              </Link>
            </li>
            <li className="toplistitem">
              {" "}
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topsearchicon fa-solid fa-magnifying-glass"></i>{" "}
      </div>
    </div>
  );
}

import "./setting.css";
import SideBar from "../../components/sidebar/Sidebar";
export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update your Account</span>
          <span className="settingDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images.unsplash.com/photo-1620403724159-40363e84a155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              alt=""
              className="settingProfileImg"
            />
            <label htmlFor="fileInput">
              <i className="settingPPIcon fa-solid fa-user-tie"></i>
            </label>
          </div>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="Huzaifa" />
          <label>Email</label>
          <input type="email" placeholder="huzaifa@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="username"
          className="registerInput"
          placeholder="Enter your username"
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Email address"
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password"
        />
        <label>ReType Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password again"
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
}

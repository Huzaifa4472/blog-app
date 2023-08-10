import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headertitle">
        <span className="headertitleSm">React&Node</span>
        <span className="headertitleLg">Blog</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1535954741680-a2e24eb05418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
        alt=""
        className="headerImage"
      />
    </div>
  );
}

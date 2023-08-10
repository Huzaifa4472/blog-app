import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/singlePost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

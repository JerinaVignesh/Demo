import { useNavigate } from "react-router-dom";
function HomeComponent() {
  const navigate = useNavigate();
  return (
    <div className="Container mt-5">
      <div className="row justify-content-center">
        <h5>Welcome</h5>
        <img src="./pexels-photo-1133957.webp" alt="React Logo"></img>
        <button
          className="btn btn-primary mt-5 "
          onClick={() => navigate("/list")}
        >
          Go to List
        </button>
      </div>
    </div>
  );
}
export default HomeComponent;

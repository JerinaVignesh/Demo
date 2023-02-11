import { useNavigate } from "react-router-dom";
function ErrorCoponent() {
  const navigate = useNavigate();
  return (
    <div className="Container mt-5">
      <div className="row justify-content-center">
        <h5>404-Page Not Found</h5>

        <button
          className="btn btn-primary mt-5 "
          onClick={() => navigate("/home")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
export default ErrorCoponent;

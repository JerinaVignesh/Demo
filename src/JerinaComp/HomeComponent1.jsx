import React from "react";
import { useNavigate } from "react-router-dom";

function HomeComponent1() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <h2>Welcome to Our Page</h2>
      <p>
        A web page is a hypertext document on the World Wide Web. Web pages are
        delivered by a web server to the user and displayed in a web browser. A
        website consists of many web pages linked together under a common domain
        name. The name "web page" is a metaphor of paper pages bound together
        into a book.
      </p>
      <button
        className="btn btn-primary mt-5 "
        onClick={() => navigate("/login")}
      >
        Go to Login
      </button>
    </div>
  );
}
export default HomeComponent1;

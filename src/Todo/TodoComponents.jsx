import React from "react";
import HomeComponent from "./HomeComponent";
import ListComponent from "./ListComponent";
import LoginComponent from "./LoginComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from "./withNavigation";
import ErrorCoponent from "./ErrorComponent";

function TodoComponent() {
  const LoginComponentWithNavigation = withNavigation(LoginComponent);
  const HomeComponentWithNavigation = withNavigation(HomeComponent);

  return (
    <div className="todo">
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponentWithNavigation />}></Route>
          <Route
            path="/login"
            element={<LoginComponentWithNavigation />}
          ></Route>
          <Route path="/home" element={<HomeComponentWithNavigation />}></Route>
          <Route path="/list" element={<ListComponent />}></Route>
          <Route path="*" element={<ErrorCoponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default TodoComponent;

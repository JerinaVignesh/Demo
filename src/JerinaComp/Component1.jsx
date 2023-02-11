import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorComponent1 from "./ErrorComponent1";
import LoginComponent1 from "./LoginComponent1";
import HomeComponent1 from "./HomeComponent1";
import Navigation from "./Navigation";
import ListComponent1 from "./ListComponene1";

function Component1() {
  const LoginComponent1Navigation = Navigation(LoginComponent1);
  const HomeComponent1Navigation = Navigation(HomeComponent1);
  const ListCoomponent1Navigation = Navigation(ListComponent1);
  return (
    <div className="todo">
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent1Navigation />}></Route>
          <Route path="/login" element={<LoginComponent1Navigation />}></Route>
          <Route path="/home" element={<HomeComponent1Navigation />}></Route>
          <Route path="/list" element={<ListCoomponent1Navigation />}></Route>

          <Route path="*" element={<ErrorComponent1 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Component1;

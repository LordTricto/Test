import { Navigate, Route, Routes } from "react-router-dom";

import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { AuthContext } from "./authContext";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";
import SnackBar from "./components/SnackBar";

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboardPage />}
          ></Route>
        </Routes>
      );
      break;
    default:
      return (
        <Routes>
          <Route exact path="/admin/login" element={<AdminLoginPage />}></Route>
          <Route path="*" exact element={<NotFoundPage />}></Route>
        </Routes>
      );
      break;
  }
}

function Main() {
  const { state } = React.useContext(AuthContext);

  return (
    <div className="h-full">
      <div className="flex w-full">
        <div className="w-full">
          <div className={"page-wrapper w-full py-10 px-5" + ` ${(state.isAuthenticated  && state.role === "admin") ? "bg-black-bg " : ""}`}>
            {!state.isAuthenticated
              ? renderRoutes("none")
              : renderRoutes(state.role)}
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Main;
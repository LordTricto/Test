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
          <Route exact path="/admin/login" element={<AdminLoginPage />}></Route>
        </Routes>
      );
      break;
    default:
      return (
        <Routes>
           <Route
              path="/admin/dashboard"
              element={<Navigate to="/admin/login" replace />}
            />
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
      <div className="flex flex-grow w-full h-full">
        <div className="flex flex-grow w-full h-full">
          <div className={"flex flex-grow w-full h-full min-h-screen px-5 overflow-y-auto" + ` ${(state.isAuthenticated  && state.role === "admin") ? "bg-black-bg " : ""}`}>
            {/* {!state.isAuthenticated
              ? renderRoutes("none")
              : renderRoutes(state.role)} */}
                {renderRoutes(state.role)}
          </div>
        </div>
      </div>
      <SnackBar />
    </div>
  );
}

export default Main;

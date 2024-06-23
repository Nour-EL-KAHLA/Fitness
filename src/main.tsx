import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signin from "./components/Auth/Signin.tsx";
import Signup from "./components/Auth/Signup.tsx";
import Landing from "./pages/Landing/Landing.tsx";
import Authlayout from "./pages/Auth/Authlayout.tsx";
import PrivateRoute from "./components/Auth/PrivateRoute.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Program from "./pages/Program/Program.tsx";
// import CoachRoute from "./components/Auth/CoachRoute.tsx";
// import Coaching from "./pages/Coaching/Coaching.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* <Route element={<App />}>
          <Route path="/" element={<Landing />}></Route>
        </Route> */}
          <Route path="/*" element={<Landing />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/program" element={<Program />}></Route>
          </Route>

          <Route element={<Authlayout />}>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

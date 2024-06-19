import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signin from "./components/Auth/Signin.tsx";
import Signup from "./components/Auth/Signup.tsx";
import Landing from "./pages/Landing/Landing.tsx";
import Authlayout from "./pages/Auth/Authlayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Landing />}></Route>
        </Route>

        <Route element={<Authlayout />}>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/*" element={<Navigate to={"signin"} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

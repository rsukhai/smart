import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage"



const AppRouter = () => {
    return (

        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignupPage />} />
          {/* <Route path="/plans" exact element={<Tarrifs />} />
          <Route path="/product" exact element={<Product />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>

    );
  };
  
  export default AppRouter;
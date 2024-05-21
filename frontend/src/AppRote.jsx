import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage"
import ProfilePage from "./ProfilePage/ProfilePage";
import ForgotPasswordPage from "./ForgotPasswordPage/ForgotPasswordPage"
import NewPasswordPage from "./NewPasswordPage/NewPasswordPage";
import HomePage from "./HomePage/HomePage";
import SnakeGame from "./Snake/Snake";
import GamePage from "./GamesPage/GamePage";
import GamesPages from "./GamesPage1/GamesPage";
import RulesPage from "./RulesPage/RulesPage";
import SnakeGame2 from "./snakeNew/SnakeGame";



const AppRouter = () => {
    return (

        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/profile" exact element={<ProfilePage />} />
          <Route path="/frgtpg" exact element={<ForgotPasswordPage />} />
          <Route path="/nwpswrd" exact element={<NewPasswordPage />} />
          <Route path="/home" exact element={<HomePage />} />
          {/* <Route path="/snake" exact element={<SnakeGame />} /> */}
          <Route path="/games" exact element={<GamePage />} />
          {/* <Route path="/games2" exact element={<GamePages />} /> */}
          <Route path="/rules" exact element={<RulesPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="/snake" exact element={<SnakeGame2 />} />

        </Routes>

    );
  };
  
  
  export default AppRouter;
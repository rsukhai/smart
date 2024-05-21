import "./RulesPage.css"
import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";



const RulesPage = () => {

    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    function handleClick() {
        navigate('/rules');
        localStorage.clear();
    }
    function handleClickSnake() {
        navigate('/snake');
    }
    return (
        <div className="GamesPageContainer">
            <div className="header">
                <img className="logo" src="../img/smartkids_logo2.png" alt="logo" />
                <div className="menu">
                    <img className="menuItem" src="../img/questions.png" alt="questions" onClick={handleClick} />
                    <img className="menuItem" src="../img/games.png" alt="games" onClick={handleClick} />
                    <img className="menuItem" src="../img/account.png" alt="account" onClick={handleClick} />
                    <img className="menuItem" src="../img/settings.png" alt="settings" onClick={handleClick} />
                </div>
            </div>
            <div className="RulesTitle">RULES</div>
            <div className="RulesText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, roma sukhai
                quis nostrud exercitation ullamco laboris ira lemchuk nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit </div>
            <div className="letsplay" onClick={handleClickSnake} >LET`S PLAY!</div>
        </div>

    )









}

export default RulesPage
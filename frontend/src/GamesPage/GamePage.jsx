import "./GamesPage.css"
import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const GamePage = () => {

    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    function handleClick() {
        navigate('/login');
        localStorage.clear();
    }

    useEffect(() => {
        // Отримання даних користувача з localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            // Парсинг рядка JSON назад в об'єкт і збереження в стані
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div>No user data</div>;
    }
    



    return (
        <div className="homePageContainer">
            <div className="header">
                <img className="logo" src="../img/smartkids_logo2.png" alt="logo" />
                <div className="menu">
                    <img className="menuItem" src="../img/questions.png" alt="questions" onClick={handleClick} />
                    <img className="menuItem" src="../img/games.png" alt="games" onClick={handleClick} />
                    <img className="menuItem" src="../img/account.png" alt="account" onClick={handleClick} />
                    <img className="menuItem" src="../img/settings.png" alt="settings" onClick={handleClick} />
                </div>
            </div>

            <div className="title-games">LEARN AND PLAY!</div>

            <div className="games-container">
                <div className="game">
                    <div className="game-box">
                        <div className="white-box"></div>
                        <div className="dark-text">Eat And Match</div>
                    </div>
                    <img className="lines" src="../img/!!.png" alt="lines" />
                </div>

                <div className="game">
                    <div className="game-box">
                        <div className="white-box"></div>
                        <div className="dark-text">Find The Item</div>
                    </div>
                    <img className="lines" src="../img/!!.png" alt="lines" />
                </div>

                <div className="game">
                    <div className="game-box">
                        <div className="white-box"></div>
                        <div className="dark-text">Create The Dish</div>
                    </div>
                    <img className="lines" src="../img/!!.png" alt="lines" />
                </div>
            </div>

            <div className="footer">
                <div className="footerWightText">Contacts</div>
                <div className="footerWightText">Help</div>
                <div className="footerWightText">Privacy Policy | Terms of Use</div>
                <div className="footerText">
                    <div className="footerWightText footerBlueText">SMARTkids</div>
                    <div className="footerWightText"> est. 2024</div>
                </div>
            </div>
        </div >
    )
}

export default GamePage

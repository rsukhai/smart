import "./SnakeGame.css"
import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import SnakeGame from "../Snake/Snake";

const SnakeGame2 = () => {
    const [collectedWords, setCollectedWords] = useState([]);
    const words = ['APPLE', 'PIG'];

    const handleWordComplete = (word) => {
        setCollectedWords([...collectedWords, word]);
    };

    const handleResetWords = () => {
        setCollectedWords([]);
    };

    function handleClick() {
        navigate('/login')
        localStorage.clear()
    }
    function handleClickProfile() {
        navigate('/profile')
    }
    function handleClickHome() {
        navigate('/home')
    }

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
        <div className="snakeGameContainer">
            <div className="header">
                <img className="logo" src="../img/smartkids_logo2.png" alt="logo" />
                <div className="menu">
                    <img className="menuItem" src="../img/questions.png" alt="questions" onClick={handleClick} />
                    <img className="menuItem" src="../img/account.png" alt="account" onClick={handleClickProfile} />
                    <img className="menuItem" src="../img/settings.png" alt="settings" onClick={handleClickProfile} />
                </div>
            </div>
            <div className="title-snake">EAT AND MATCH!</div>
            <div className="snake-game-main-container">
                <div className="snake-game-bord-box">
                    <div className="snake-game-bord" src="../img/chess.png" alt="gamebord"><SnakeGame onWordComplete={handleWordComplete} onReset={handleResetWords} /></div>
                    {/* <img className="snake-game-bord" src="../img/chess.png" alt="gamebord" /> */}
                    
                </div>
                <div className="snake-game-words-container">
                {collectedWords.map((word, index) => (
                    <div key={index} className="snake-game-words-box">
                        <img className="img-word" src="../img/star1.png" alt="img-word" />
                        {word}
                    </div>
                ))}
                    
                </div>
            </div>
            <div className="snake-game-score">
                <img className="snake-game-img-score" src="../img/star1.png" alt="star" />
                <div className="snake-game-score-number">10</div>
            </div>
            <div className="snake-game-buttons-container">
                <div className="snake-game-menu" onClick={handleClickHome}>MENU</div>
                <div className="snake-game-next snake-game-menu">NEXT</div>
            </div>
        </div >
    )
}

export default SnakeGame2

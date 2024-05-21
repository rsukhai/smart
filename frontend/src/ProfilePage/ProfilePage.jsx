import React from 'react'
import './ProfilePage.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {
    // const location = useLocation();
    // const { user } = location.state || {};

    const [user, setUser] = useState(null)

    useEffect(() => {
        // Отримання даних користувача з localStorage
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            // Парсинг рядка JSON назад в об'єкт і збереження в стані
            setUser(JSON.parse(storedUser))
        }
    }, [])
    let navigate = useNavigate()
    function handleClick() {
        navigate('/home')
    }
    function handleClickProfile() {
        navigate('/profile')
    }
    function handleClickGames() {
        navigate('/games')
    }

    if (!user) {
        return <div>No user data</div>
    }

    return (
        <div className="profileContainer">
            <div className="banner">
                <div>
                    <div className="menu">
                        <img
                            className="menu-item"
                            src="../img/questions-white.png"
                            alt="questions"
                            onClick={handleClick}
                        />
                        <img
                            className="menu-item"
                            src="../img/games-white.png"
                            alt="games"
                            onClick={handleClickGames}
                        />
                        <img
                            className="menu-item"
                            src="../img/setting.png"
                            alt="settings"
                            onClick={handleClickProfile}
                        />
                    </div>
                    <img
                        className="avatar"
                        src="../img/avatar.png"
                        alt="avatar"
                    />
                </div>
                <div>
                    <img
                        className="snakeImg"
                        src="../img/snake2.png"
                        alt="snake"
                    />
                </div>
            </div>
            <div className="userMainInfo">
                <div className="userMainInfo1">
                    <div className="userName">{user.username}</div>
                    <div className="status">Status</div>
                </div>
                <img className="star" src="../img/star1.png" alt="star" />
                <div className="scoreNumber">{user.stars}</div>
                <img className="flag" src="../img/flag.png" alt="flag" />
                <div className="userYear">{user.age} years</div>
            </div>
            <div className="bio">
                <div className="title">MY INFO</div>
                <div className="text2">
                    MY INFO Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit{' '}
                </div>
            </div>
            <div className="space">
                <div className="title">SATISTICS</div>
                <div className="statisticsContainer">
                    <div className="statisticsBox">
                        <div className="numberBox"></div>
                        <div className="text statisticsText">New words</div>
                    </div>
                    <div className="statisticsBox">
                        <div className="miniBox"></div>
                        <div className="text statisticsText">Favorite game</div>
                    </div>
                    <div className="statisticsBox">
                        <div className="miniBox"></div>
                        <div className="text rankText">Rank</div>
                    </div>
                    <div className="statisticsBox">
                        <div className="numberBox"></div>
                        <div className="text statisticsText">Achievements</div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerWightText">Contacts</div>
                    <div className="footerWightText">Help</div>
                    <div className="footerWightText">
                        Privacy Policy | Terms of Use
                    </div>
                    <div className="footerText">
                        <div className="footerWightText footerBlueText">
                            SMARTkids
                        </div>
                        <div className="footerWightText"> est. 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

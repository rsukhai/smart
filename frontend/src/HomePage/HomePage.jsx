import "./HomePage.css"
import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const HomePage = () => {

    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    function handleClick() {
        navigate('/login');
        localStorage.clear();
    }
    function handleClick2() {
        navigate('/games');
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
                    <button className="ellipse" onClick={handleClick}><img className="settings" src="../img/questions.png" alt="settings" /></button>
                    
                    <button className="ellipse" onClick={handleClick2}><img className="settings" src="../img/games.png" alt="settings" /></button>
                    <button className="ellipse"><img className="settings" src="../img/account.png" alt="settings" /></button>
                    <button className="ellipse"><img className="settings" src="../img/settings.png" alt="settings" /></button>

                    
                </div>
            </div>
            <div className="aboutBox">
                <div><div className="titleAbout">GREATINGSSSSS!</div>
                <div className="text">We are inviting you to the exciting world of learning English!</div>
                <button className="tryButton">TRY!</button></div>
                <div><img className="snake" src="../img/snake1.png" alt="snake" /></div>
                
                
            </div>
            <div className="whyUsContainer">
                <div className="whyUs">
                    <div className="whyUsBox">
                        <div className="whiteBox"></div>
                        <div className="text darkText">easy</div>
                    </div>
                    <img className="line" src="../img/!!.png" alt="lines" />
                </div>

                <div className="whyUs">
                    <div className="whyUsBox">
                        <div className="whiteBox"></div>
                        <div className="text darkText">useful</div>
                    </div>
                    <img className="line" src="../img/!!.png" alt="lines" />
                </div>

                <div className="whyUs">
                    <div className="whyUsBox">
                        <div className="whiteBox"></div>
                        <div className="text darkText">effectively</div>
                    </div>
                    <img className="line" src="../img/!!.png" alt="lines" />
                </div>
            </div>
            <div className="textWhyUsContainer">
                <div className="textWhyUsBox">
                    <p className="title">EASY</p>
                    <p className="textWhyUsText">Our platform offers a <span class="highlightPink">simple</span> interface and <span class="highlightPink">intuitive</span> tools, making the process of learning English for your child easy and enjoyable.</p>
                </div>
                <div className="textWhyUsBox">
                    <p className="title">USEFUL</p>
                    <p className="textWhyUsText">We provide access to a wide range of <span class="highlightPink">games</span> and <span class="highlightPink">activities</span> designed with educational needs in mind. Each activity aims to <span class="highlightPink">improve</span> speaking skills, expand vocabulary, and reinforce grammar concepts.</p>
                </div>
                <div className="textWhyUsBox">
                    <p className="title">EFFECTIVE</p>
                    <p className="textWhyUsText">Our approach to learning English through games enhances children's interest and <span class="highlightPink">motivation</span>, leading to faster and more effective language acquisition.</p>
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
        </div>
    )
}

export default HomePage

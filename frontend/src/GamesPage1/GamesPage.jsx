import "./GamesPage.css"
import React from "react"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";



const GamesPages = () => {

    const [user, setUser] = useState(null);
    let navigate = useNavigate();
    function handleClick() {
        navigate('/games');
        localStorage.clear();
    }

   // useEffect(() => {
        // Отримання даних користувача з localStorage
      //  const storedUser = localStorage.getItem('user');
       // if (storedUser) {
            // Парсинг рядка JSON назад в об'єкт і збереження в стані
       //     setUser(JSON.parse(storedUser));
    //    }
   // }, []);

   // if (!user) {
    //    return <div>No user data</div>;
  //  }




    return (
        <div className="GamesPageContainer">
            <div className="header">
                <img className="logo" src="../images/smartkids_logo2.png" alt="logo" />
                <div className="menu">
                    <img className="menuItem" src="../images/questions.png" alt="questions" onClick={handleClick} />
                    <img className="menuItem" src="../images/games.png" alt="games" onClick={handleClick} />
                    <img className="menuItem" src="../images/account.png" alt="account" onClick={handleClick} />
                    <img className="menuItem" src="../images/settings.png" alt="settings" onClick={handleClick} />
                </div>
            </div>
            <div className="LearnAndPlay">LEARN AND PLAY!</div>
            <div className="Games">
            
                <div className="Game">
                    <div className="GameBox">
                        <div className="whiteBox1"></div>
                        <div className="text darkText">Eat And <br/> Match</div>
                    </div>
                    <img className="line" src="../images/!!.png" alt="lines" />
                </div>

                <div className="Game">
                    <div className="GameBox">
                        <div className="whiteBox1"></div>
                        <div className="text darkText">Find The <br/> Item</div>
                    </div>
                    <img className="line" src="../images/!!.png" alt="lines" />
                </div>

                <div className="Game">
                    <div className="GameBox">
                        <div className="whiteBox1"></div>
                        <div className="text darkText">Create The <br/> Dish</div>
                    </div>
                    <img className="line" src="../images/!!.png" alt="lines" />
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

export default GamesPages

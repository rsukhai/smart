import React, { useState, useEffect } from "react";
import "./SignupPage.css";
import { useNavigate  } from "react-router-dom";
// import { USERS } from "../backend/db.js"

const SignupPage = () => {

    const [data, setData] = useState(null)

    
    useEffect (()=>{
        fetch('/login')
        .then(response=>response.json())
        .then (response=>setData(response.message))
    },[])


    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        age: 1 
    });

    const options = [];

    for (let i = 1; i <= 101; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            stars: "0",
            newWords:"0",
            favoriteGame:"null",
            rank:"0",
            achievements:"0"
        });
    };
    const navigate = useNavigate ();
    const [error, setError] = useState("");
    const handleSubmit = () => {

        if (!formData.username || !formData.password || !formData.email || !formData.phoneNumber || !formData.age) {
            setError("All fields are required"); // Встановлення повідомлення про помилку
            return; // Завершення функції, щоб запобігти подальшому виконанню
        }

        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // USERS.push(data); // Додавання даних до бази даних
            // Очистити форму або виконати інші дії після успішного відправлення даних
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        navigate('/login',)
        setError("");

    };

    return (
        <div className="authorizationContainer">
            <div>{data}</div>
            <div className="logInContainer">
                <img className="logInLogo" src="../img/smartkids_logo2.png" alt="logo" />
                <div className="authorization">
                    <input
                        type="text"
                        name="username"
                        className="authorizationInput"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        className="authorizationInput"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        className="authorizationInput"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        className="authorizationInput"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <div className="authorizationAgeBox">
                        <div className="authorizationBoxAge">Age</div>
                        <select
                            name="age"
                            className="authorizationAgeSelect"
                            value={formData.age}
                            onChange={handleChange}
                        >
                            {options}
                        </select>
                    </div>
                </div>
                <button className="buttonGo" onClick={handleSubmit}>
                    GO!
                </button>
                <div className="loginBox">
                    <div className="moveToLoginLink">Already registered?</div>
                    <div className="loginLink"><a href="/login">Log in</a></div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
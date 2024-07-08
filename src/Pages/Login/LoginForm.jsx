import React, { useState } from 'react';
import '../Login/LoginForm.css';
import { useNavigate } from "react-router-dom";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function LoginForm() {
    const initialValue = { email: "", password: "" };
    const [loginFormData, setLoginFormData] = useState(initialValue);
    const [loginData , setLoginData] = useState();
    const navigate = useNavigate();

    const { setAuthCheck, loginToken, setToken, User_Details, setUserDetails } = useThemeContextValue();

    
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
        console.log(loginFormData)

    };

    const handleSubmit = (e) => {
        e.preventDefault();
       

        console.log('login data :', loginFormData);
        handleLogin(loginFormData);
        
        // navigate('/')

        if(loginData.status === "success") {
            setAuthCheck(true)
            navigate("/")
        }
        // validataion funciton calling

    };

    const handleLogin = async (value) => {
        const myHeaders = new Headers();
        myHeaders.append("projectID", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": value.email,
            "password": value.password,
            "appType": "facebook"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/user/login", requestOptions);
            const result = await response.json();
            if(result.status==="success"){
                localStorage.setItem("token", JSON.stringify(result.token));
                localStorage.setItem("User_Details", JSON.stringify(result.data));
                setUserDetails(result.data)
                setAuthCheck(true);
                navigate('/')
            }

            if(result.status==="fail"){
                console.log(false)
            }


            
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="main bg-[#f0f2f5]">
            <div className="loginForm rounded-md text-center">
                {/* <h2 className="w-full text-center font-bold text-blue-600 text-[2rem] font-serif">Facebook</h2> */}
                <img 
                className="h-20"
                src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" 
                alt="facebook logo" 
                />
                <h2 className="font-bold text-blue-600 text-[20px] border-b border-black mb-5">Log In</h2>
                <form  onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email address or phone number"
                        name="email"
                        value={loginFormData.email}
                        onChange={handleChange}
                    />
                    <input
                    className="my-8"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={loginFormData.password}
                        onChange={handleChange}
                    />
                    <button
                        className="login-btn font-bold py-2 rounded-md text-[20px] bg-[#0866ff]"
                        type="submit"
                    >
                        Log In
                    </button>

                   
                </form>
                <p className="text-[#0866ff] my-3">Forgetten password?</p>

                <p className="w-full h-[1px] bg-gray-500"></p>

                <button onClick={() => navigate('/signInPage')} className="bg-[#42b72a] w-full text-center text-white font-semibold rounded-md py-2 mt-5 ">Create new Account</button>
            </div>
        </div>
    )
}

export default LoginForm;
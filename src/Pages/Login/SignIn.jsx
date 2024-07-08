import React, { useState ,useEffect } from 'react';
import '../Login/SignIn.css';
import { Link, useNavigate } from "react-router-dom";
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function SignIn() {
  const [useSignUp, setUserSignUp] = useState()
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);

  const navigate = useNavigate()
  const { auth, setAuth, postFunction, authCheck, setAuthCheck } = useThemeContextValue();
  // signup page form data 
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialValue);

  console.log(useSignUp?.status);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData)

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    handleSignUp();
    const token = localStorage.getItem("token");
    setFormErrors(validataion(formData));
    setIsSubmit(true);
    
    if (useSignUp.status === "success") {
      navigate('/loginpage');
    }
    if(useSignUp.status === "fail") {
      navigate('/loginForm')
    }

    console.log('sign in data : ', formData);
    
    // validataion funciton calling
    
  };

  useEffect(()=> {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formData);
    }
  },[formErrors])

  // validation of sign in form 
  const validataion = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!values.firstName){
      errors.firstName = "firstName is required!";
    }

    if(!values.lastName){
      errors.lastName = "lastName is required!";
    }

    if(!values.email) {
      errors.email = "Email is required!"
    }else if(!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "password is required!"
    }else if(values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }else if(values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
  }

  const handleSignUp = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("projectID", "ywl8a606ax3d");

    const raw = JSON.stringify({
      "name": formData.firstName,
      "email": formData.email,
      "password": formData.password,
      "appType": "facebook"
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://academics.newtonschool.co/api/v1/user/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => setUserSignUp(result))
      .catch((error) => console.error(error));
  }

  console.log("useSignUp", useSignUp);


  // form static data 
  const numbers = [...Array(30).keys()].map(n => n + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // get the current year and select the user date of bith year 
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i <= 40; i++) {
    years.push(currentYear - i);
  }




  return (
    <div className=" flex justify-center items-center py-5 bg-[#e3ebf8]">
      <div className="form_container bg-[#fcfafa]">

        {/* <h2 className="w-full text-center font-bold text-blue-600 text-[2rem]">Facebook</h2> */}
        <div className="flex items-center justify-center">
          <img
            className="h-20"
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
            alt="facebook logo"
          />
        </div>

        <div className="w-full text-center my-3 py-2 border-b border-black">
          <h4 className="font-semibold">Create a New Account</h4>
          <p>It's quick and easy</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="w-fulll">
              <input
                type="text"
                className="w-full"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <p className="error_message">{formErrors.firstName}</p>
            </div>

            <div>
              <input
                type="text"
                className="w-full"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <p className="error_message">{formErrors.lastName}</p>
            </div>

          </div>

          <div>
            <input
              className="text-center w-full"
              type="text"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="error_message">{formErrors.email}</p>
          </div>

          <div>
            <input
              className="text-left w-full"
              type="password"
              placeholder="New Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="error_message">{formErrors.password}</p>
          </div>

          <div className="my-3">
            <label className="">Date of Birth</label>
            <div className="flex gap-3">

              <select name="Date" id="" className="w-[33%] border-2 border-gray rounded-md px-2">
                {
                  numbers.map((num, i) => (
                    <option key={i}>{num}</option>
                  ))
                }
                <option value=""></option>
              </select>

              <select name="Date" id="" className="w-[33%] border-2 border-gray rounded-md px-2">
                {
                  months.map((num, i) => (
                    <option key={i}>{num}</option>
                  ))
                }
                <option value=""></option>
              </select>

              <select name="Date" id="" className="w-[33%] border-2 border-gray rounded-md px-2">
                {
                  years.map((num, i) => (
                    <option key={i}>{num}</option>
                  ))
                }
                <option value=""></option>
              </select>
            </div>
          </div>

          <div className="my-3">
            <label > Gender</label>
            <div className="my-3">
              <select name="" id="" className="border-2 border-black rounded-md px-5">
                <option>Female</option>
                <option>Male</option>
                <option>Custom</option>
              </select>
            </div>
          </div>

          <p>
            People who use our service may have uploaded your contact information to Facebook. Learn more.
          </p>

          <p>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
          </p>

          <div className="w-full text-center py-1 mt-5">
            <button
              type="submit"
              className="btn text-white rounded-md bg-green-700 font-bold px-20 py-1"
            >
              Sign Up
            </button>

            <p className="text-blue-600 text-sm my-5">
              <button onClick={()=> navigate("/loginpage")}>Already have an account?</button>
            </p>
          </div>

          <div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
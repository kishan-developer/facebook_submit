import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HomeIcon from '@mui/icons-material/Home';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MaleIcon from '@mui/icons-material/Male';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Intro() {

  const [userPersonalData , setUserPersonalData] = useState();

  const getUserPersonalData = async () => {
    console.log("1")
    const token = localStorage.getItem("token");
    if (!token) {
      console.error('Token not found');
      return;
    }

    let myHeaders = new Headers();
    myHeaders.append("projectId", "ywl8a606ax3d");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);


    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/facebook/user/660bd106920b6ca2236cafc2", requestOptions)
      const result = await response.json();
      console.log("result", result);
      setUserPersonalData(result);
    } catch (error) {
      console.error("error",error);
    }
  }


  useEffect(() => {
    getUserPersonalData();
  }, []);

  return (
    <div className="bg-white min-h-[auto] rounded-md p-5">
      <h2 className="text-[1.5rem] font-semibold ">Intro</h2>
      <div className="flex flex-col text-center">

        <div className="w-auto flex items-center flex-row gap-1 ">
          <IconButton>
            <BusinessCenterIcon />
          </IconButton>
          <p className="text-[0.9rem] font-semibold">Work</p>
        </div>

        <div className="w-auto flex items-center flex-row gap-1 ">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <p className="text-[0.9rem] font-semibold">Add</p>
        </div>

        <div className="w-auto flex items-center flex-row gap-1 ">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <p className="text-[0.9rem] font-semibold">email</p>
        </div>

        <div className="w-auto flex items-center flex-row gap-1 ">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <p className="text-[0.9rem] font-semibold">gender</p>
        </div>

        <div className="w-auto flex items-center flex-row gap-1 ">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <p className="text-[0.9rem] font-semibold">time</p>
        </div>



      </div>
    </div>
  )
}

export default Intro;
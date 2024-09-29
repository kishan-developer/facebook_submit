import React,{ useEffect } from 'react';
import '../ProfilePage/Profile.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Avatar, IconButton } from '@material-ui/core';
import Top from './Top';
import Dashbords from './DashbordPages/Dashbords';
import { Outlet} from 'react-router-dom';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';


function Profile() {


  const { useAllData, setUserAllData, currentUserDetails } = useThemeContextValue()

  localStorage.setItem("currentUserDetails", currentUserDetails)

  console.log("currentUserDetails", currentUserDetails)

  const userIds = localStorage.getItem("current_page_User_ID");
  console.log("userId",  userIds)

  // console.log("current page data profile page ",JSON.parse(data));

  // const userData = JSON.parse(data);
  //

  // using owner id get the all user data 

  // function getUserAllData(authorId) {
  //   alert("getUserAllData");
  //   console.log("getUserAllData authorId", authorId);

  

  //   const myHeaders = new Headers();
  //   myHeaders.append("projectId", "ywl8a606ax3d");

  //   const requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow"
  //   };

  //   fetch(`https://academics.newtonschool.co/api/v1/facebook/channel/${authorId}`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => console.log("---------",result))
  //     .catch((error) => console.error(error));
  // }

  console.log("useAllData  profile: ", useAllData);

  // useEffect(() => {
  //   getUserAllData(userIds);
  // }, []);


  return (
    <div className="profile">
      <div className="profile_Page">
        <Top currentUserDetails={currentUserDetails}/>
      </div>
      <div className="profile_Page_bottom mt-[1%]">
        <div className="profile_Page_bottom_child">
          {/* <Dashbords/> */}
          <Outlet/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Profile;
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import {  } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../CSS/Header.css';
import { Link, useNavigate } from "react-router-dom"
import { useThemeContextValue } from '../Utils/context/ThemeContext';
import UserModel from '../Components/UserModel.jsx';
import Menu from './DropDowns/Menu/Menu.jsx';
import MessageComponent from './DropDowns/Message/MessageComponent';
import SearchModel from '../Pages/SearchPage/SearchModel';
import UserProfile from './DropDowns/Profile/UserProfile';

function Header() {
  const { model, setModel, SearchFunc, searchValue, setSearchValue, User_Details, setUserDetails } = useThemeContextValue();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuState , setMenuState] =useState(false);
  const [messageState, setMessageState] = useState(false);
  const [userProfileModel , setUserProfile] = useState(false);

  const [searchModel , setSearchModel] = useState(false);

  const navigate = useNavigate();

  const user = localStorage.getItem("userLoginData");

  const handleIconClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  
  // console.log(SearchIcon)
  
  const handleChangeSeachData = (value) => {
    setSearchValue(value);
    SearchFunc(searchValue);
  }

  

  const handleSearch = () => {
    SearchFunc(searchValue);
    setSearchModel(!searchModel);
    navigate('/searchpage');
  }


  return (
    <div className="header">
      <div className="header_left">
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbzoUBvfVwnAPFBpFSjqe_q12i_J_lLfgsEYv2w6hEWHym8t2-3x8mLby99w&s" alt="logo_Facebook" /> */}

        <FacebookIcon onClick={() => navigate('/')} fontSize="large" className="text-blue-500" />

        <div className="header_search ">
          <SearchIcon onClick={() => navigate('/searchpage')} />
          <input
            className="hidden xl:block lg:block md:block sm:block"
            onClick={handleSearch}
            type="text"
            placeholder="Search Facebook"
            value={searchValue}
            onChange={(e)=>handleChangeSeachData(e.target.value)}
          />
        </div>
      </div>

      <div className="header_middle">
        <div className="header_option active:bg-blue-300">
          <Link to="/"><HomeIcon fontSize="large" /></Link>
        </div>

        <div className="header_option active:bg-blue-300">
          <Link to="/video"><OndemandVideoIcon fontSize="large" /></Link>
        </div>

        <div className="header_option">
          <Link to="/group"><PeopleIcon fontSize="large" /></Link>
        </div>

        <div className="header_option">
          <Link to="/group"><SportsEsportsIcon fontSize="large" /></Link>
        </div>

      </div>

      <div className="header_right">
        <div className="header_info" onClick={() => setUserProfile(!userProfileModel)}>
          <Avatar src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png" />
        </div>

        <IconButton onClick={()=> setMenuState(!menuState)}>
          <AppsIcon />
        </IconButton>

        <IconButton onClick={() => setMessageState(!messageState)}>
          <ForumIcon />
        </IconButton>

        <IconButton onClick={() => setMessageState(!messageState)}>
          <NotificationsActiveIcon />
        </IconButton>

        {/* <IconButton onClick={() => setMessageState(!messageState)}>
          <ArrowDropDownIcon />
        </IconButton> */}

      </div>

      {isModalOpen && <UserModel closeModal={() => setIsModalOpen(false)} />}

      {menuState && <Menu closeModal={() => setMenuState(!menuState) }/> }

      {messageState && <MessageComponent closeModal={() => setMessageState(!messageState)} />}

      {userProfileModel && <UserProfile closeModal={() => setUserProfile(!userProfileModel)} />}

      

      {searchModel && <SearchModel handleSearch={handleSearch} handleChangeSeachData={handleChangeSeachData} searchValue={searchValue} closeModal={() => setSearchModel(!searchModel)} />}

    </div>
  )
}

export default Header;
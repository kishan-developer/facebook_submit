import React from 'react';
import '../ProfilePage/Profile.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ProfileNav from './ProfileNav';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function Top({ currentUserDetails }) {

   

    const { searchData, setSearchData } = useThemeContextValue();

    // console.log("searchData", searchData)

    localStorage.setItem("currentProfileName",currentUserDetails?.data?.name)

    return (
        <>
            <div className="profile_Img">
                <img
                    className="img"
                    src="../../Img/img.png"
                    alt="profile_imgs"
                />

{/* 
                <h1 className="h1 ">
                    <IconButton>
                        <AddAPhotoIcon />
                    </IconButton>
                    <span className="text"> Edit cover photo</span>
                </h1> */}

            </div>

            <div className="profile_links">
                <div className="profile_links_parent_child  flex flex-cal gap-5 w-full">
                    <div className="left_child w-1/2  ">

                    {/* {} */}
                        <Avatar
                            className="top_p "
                            
                            src={currentUserDetails?.data?.image}
                        />

                        <div className="user_details ">
                            <h2 className="user_name font-bold text-[1.8rem] md:text-[1.5rem] sm:text-[1rem]">{currentUserDetails?.data?.name}</h2>
                            
                        </div>
                    </div>

                    {/* <div className="right_child flex flex-row justify-center gap-2 h-fit py-1 w-auto ">
                        <button className="bg-blue-400 flex flex-row items-center gap-2 font-semibold cursor-pointer text-black rounded-md">
                            <IconButton className="iconButton">
                                <AddIcon />
                            </IconButton>
                            <span className="text">Add to Story</span>
                        </button>
                        <button className="bg-gray-200 flex flex-row gap-2 items-center font-semibold cursor-pointer text-black rounded-md">
                            <IconButton className="iconButton">
                                <EditIcon />
                            </IconButton>
                            <span className="text">Edit Profile</span>
                        </button>
                    </div> */}
                </div>


                <div className="h-[2px] "></div>
                <div className="profile_nav_list w-full ">
                    <ProfileNav />
                </div>
            </div>
        </>
    )
}

export default Top
import React from 'react';
import '../ProfilePage/Profile.css';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ProfileNav from './ProfileNav';

function Top({ useAllData }) {

    console.log("userData", useAllData?.owner?._id);

    return (
        <>
            <div className="profile_Img">
                <img
                    className="img"
                    src="https://scontent.flko7-3.fna.fbcdn.net/v/t39.30808-6/289597094_1065976217681761_5887996559628257992_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=tHhUH3kd2LYQ7kNvgEaCvOa&_nc_ht=scontent.flko7-3.fna&oh=00_AYDftFSTQGflNqLc_ZWSdX3PKajmbrGncMYN28FsEsAN9Q&oe=6681FFED"
                    alt="profile_img"
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
                        <Avatar
                            className="top_p "
                            
                            src={useAllData?.data?.image}
                        />

                        <div className="user_details ">
                            <h2 className="user_name font-bold text-[1.8rem] md:text-[1.5rem] sm:text-[1rem]">{useAllData?.data?.name}</h2>
                            
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
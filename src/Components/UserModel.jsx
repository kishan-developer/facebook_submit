import React, { useState } from 'react';
import '../CSS/userModel.css';
import { Avatar, IconButton } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import HelpIcon from '@material-ui/icons/Help';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function UserModel({ closeModal }) {

    const navigate = useNavigate();
    // const [userData , setUserData] = useState();
    const userDatails = localStorage.getItem("User_Details")
    const UserDetail = JSON.parse(userDatails);

    // setUserData(user);


    // console.log(user);

    const handleProfile = ()=> {
       
        navigate('/userProfile')
        closeModal();
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="main w-full flex flex-col  ">
                    <div className="flex flex-col w-full gap-3">
                        <div className="user w-full flex justify-left items-center gap-2 py-2">
                            <Avatar size="large" />
                            <p className="text-[1.2rem] font-semibold">{UserDetail?.user?.name}</p>
                        </div>
                        <div className="h-[1px] bg-gray-500 w-full">

                        </div>
                        <p 
                            onClick={handleProfile}
                        className="text-blue-700 font-semibold"
                        >See all Profile</p>
                    </div>

                    <div className="icons w-full h-full">
                        <div className="w-full flex justify-between items-center gap-2 my-4 hover:bg-gray-200 hover:cursor-pointer rounded-md">
                            <div className="flex flex-row items-center gap-5">
                                <IconButton size="large" style={{ backgroundColor: 'lightgray' }}>
                                    <SettingsIcon size="large" style={{ color: 'black' }} />
                                </IconButton>
                                <p className="text-[0.9rem] font-semibold">Settings & privacy</p>
                            </div>

                            <IconButton size="large"  >
                                <KeyboardArrowRightIcon size="large" style={{ color: 'black' }} />
                            </IconButton>
                        </div>

                        <div className="w-full flex justify-between items-center gap-2 my-4 hover:bg-gray-200 hover:cursor-pointer rounded-md">
                            <div className="flex flex-row items-center gap-5">
                                <IconButton size="large" style={{ backgroundColor: 'lightgray' }}>
                                    <HelpIcon size="large" style={{ color: 'black' }} />
                                </IconButton>
                                <p className="text-[0.9rem] font-semibold">Help & support</p>
                            </div>
                            <IconButton size="large"  >
                                <KeyboardArrowRightIcon size="large" style={{ color: 'black' }} />
                            </IconButton>
                        </div>

                        <div className="w-full flex justify-between items-center gap-2 my-4 hover:bg-gray-200 hover:cursor-pointer rounded-md">
                            <div className="flex flex-row items-center gap-5">
                                <IconButton size="large" style={{ backgroundColor: 'lightgray' }}>
                                    <NightsStayIcon size="large" style={{ color: 'black' }} />
                                </IconButton>
                                <p className="text-[0.9rem] font-semibold">Display & accessbility</p>
                            </div>
                            <IconButton size="large"  >
                                <KeyboardArrowRightIcon size="large" style={{ color: 'black' }} />
                            </IconButton>
                        </div>

                        <div className="w-full flex items-center gap-5 my-4 hover:bg-gray-200 hover:cursor-pointer rounded-md">
                            <IconButton size="large" style={{ backgroundColor: 'lightgray' }}>
                                <FeedbackIcon size="large" style={{ color: 'black' }} />
                            </IconButton>
                            <p className="text-[0.9rem] font-semibold">Give & feedback</p>
                            
                        </div>

                        <div className="w-full flex  items-center gap-5 my-4 hover:bg-gray-200 hover:cursor-pointer rounded-md">
                            <IconButton size="large" style={{ backgroundColor: 'lightgray' }}>
                                <ExitToAppIcon size="large" style={{ color: 'black' }} />
                            </IconButton>
                            <p className="text-[0.9rem] font-semibold">Log & out</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserModel;
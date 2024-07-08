import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ChatIcon from '@mui/icons-material/Chat';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';

function CreatePageMain() {
    const [image, setImage] = useState("");

    const { pageName, setPageName, pageProfileImg, setPageProfileImg, pageCategory, setPageCategory, pageBio, setPageBio } = useThemeContextValue();

    return (
        <div className="h-auto">
            <div className="pageParent bg-white h-[610px] no-scrollbar overflow-auto  rounded-md px-7 pb-7">

                <div className="w-auto flex justify-between items-center">
                    <h2>Desktop preview</h2>
                    <div className="flex flex-row gap-5">
                        <button>
                            <IconButton>
                                <LaptopIcon />
                            </IconButton>
                        </button>
                        <button>
                            <IconButton>
                                <SmartphoneIcon />
                            </IconButton>
                        </button>
                    </div>
                </div>
                <div className="w-auto h-[780px] bg-gray-300 rounded-md border-2 border-gray-500" >
                    <div className="top w-auto  h-[40%] rounded-t-md" >

                    </div>
                    <div className="w-[full] h-[auto] rounded-full  flex flex-col justify-center items-center relative bottom-[15%] left-[auto]">
                        {
                            pageProfileImg ?
                                (
                                    <img src={URL.createObjectURL(pageProfileImg)} className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] rounded-full" />
                                )
                                :
                                (
                                    <img
                                        className="w-[100px] h-[100px] xl:w-[200px] xl:h-[200px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] rounded-full"
                                        src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph"
                                    />
                                )
                        }

                        <div className="w-full h-fit bg-white pb-10">
                            {/* page name */}
                            {
                                pageName ? (
                                    <h2 className="h-20 text-[2rem] font-bold w-full text-center text-gray-500">{pageName}</h2>
                                ) : (
                                        <h2 className="h-20 text-[2rem] font-bold w-full text-center text-gray-500">Page Name</h2>
                                )
                            }

                                {/* page category */}
                            {
                                pageCategory ? (
                                    <h2 className=" text-[1rem] font-semibold w-full text-center text-gray-500">{pageCategory}</h2>
                                ) : (
                                    <h2 className=" text-[1rem] font-semibold w-full text-center text-gray-500">Page Category</h2>
                                )
                            }

                            {/*  page bio */}
                            {
                                pageBio ? (
                                    <h2 className=" text-[1rem] font-semibold w-full text-center text-gray-500">{pageBio}</h2>
                                ) : (
                                    <h2 className=" text-[1rem] font-semibold w-full text-center text-gray-500">Page Bio</h2>
                                )
                            }

                            <div className="h-[1px] w-full bg-gray-500 mt-10"></div>

                            <div className="w-full flex flex-row justify-evenly items-center mt-5">
                                <ul className="flex flex-row  items-center gap-1">
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">Post</li>
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">About</li>
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">Video</li>
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">Friends</li>
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">Pages</li>
                                    <li className="text-[1rem] py-2 px-3 cursor-not-allowed font-semibold">More</li>
                                </ul>

                                <div className="buttons flex flex-row gap-5">
                                    <button className="bg-gray-300 px-3 flex flex-row items-center rounded-md cursor-not-allowed">
                                        
                                        <IconButton>
                                            <FileDownloadDoneIcon/>
                                        </IconButton>
                                        <p className="text-[1rem]  px-3">Follow</p>
                                    </button>

                                    <button className="bg-gray-300 px-3 flex flex-row items-center rounded-md cursor-not-allowed">

                                        <IconButton>
                                            <ChatIcon/>
                                        </IconButton>
                                        <p className="text-[1rem]  px-3">Message</p>
                                    </button>

                                    <button className="bg-gray-300 px-1 flex flex-row py-2 rounded-md cursor-not-allowed">
                                    
                                        <p className="text-[1rem]  px-3">...</p>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    
                </div>
            </div>
        </div>
    )
}

export default CreatePageMain;
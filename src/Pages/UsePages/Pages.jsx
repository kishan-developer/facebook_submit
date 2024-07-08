import React, { useEffect } from 'react'
import PageLeft from './PageLeft';
import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useNavigate } from 'react-router-dom';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function Pages() {
    const { getAllpageFun, pagesData, setPagesData } = useThemeContextValue();
    const navigate = useNavigate();

    console.log("pagesData", pagesData)
    
    const handleViewButton = (data)=> {
        alert(data?._id)
        // this data getting in profile page 
        localStorage.setItem("current_page_User_ID", data?._id);
        navigate('/profile')
    }

    return (
        <div className="w-full flex flex-row h-[auto]">
            <div className="left_child xl:w-[25%] lg:w-[25%] py-5 px-2 xl:block lg:block hidden">
                {/* left component */}
                <PageLeft />
            </div>
            <div className="flex flex-col  bg-gray-200 xl:w-[75%] lg:w-[75%]  w-[100%] h-[auto] py-5 xl:px-6 lg:px-5 md:px-3 sm:px-2 px-1">
                <h2 className="text-[2rem] font-bold ">All Pages</h2>
                <div className=" grid grid-cols-1  xl:gap-10 lg:gap-10 gap-5 xl:py-5 lg:py-5 md:py-2 py-0 xl:px-10 lg:px-10 md:px-5 px-[0rem]">

                    {
                        pagesData?.data?.map((data, index) => (
                            <div key={index} className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white px-5 py-2">
                                <div className="w-full px-10 flex flex-row gap-5 pt-2">
                                    <Avatar src={data?.image}
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="text-[1.3rem] font-semibold">{data?.name}</h2>
                                        <p className="">{data?.createdAt}</p>
                                    </div>
                                </div>

                                <div className="h-[15%]  flex justify-center items-center xl:gap-20 lg:gap-15 md:gap-10 sm:gap-5 gap-2 text-[1rem] font-semibold mt-8">
                                    <button onClick={() => handleViewButton(data)} className=" xl:px-[5rem] lg:px-[5rem] md:px-[2rem] sm:px-[1rem] px-[0.5rem] bg-blue-100 text-blue-600 rounded-md" >
                                        <IconButton>
                                            <EditIcon />
                                        </IconButton>
                                        view page
                                    </button>
                                    <button className="xl:px-[5rem] lg:px-[5rem] md:px-[2rem] sm:px-[1rem] px-[0.5rem] bg-gray-300 text-blue-600 rounded-md">
                                        <IconButton>
                                            <VolumeUpIcon />
                                        </IconButton>
                                        Promote
                                    </button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Pages;
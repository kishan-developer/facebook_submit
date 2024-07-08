import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ExploreIcon from '@mui/icons-material/Explore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useNavigate } from 'react-router-dom';


function PageLeft() {

    const navigate = useNavigate()

    return (
        <div className="">
            <div className="w-full flex flex-row justify-between items-center cursor-not-allowed">
                <h2 className="text-[1.5rem] font-bold">Pages</h2>
                <IconButton>
                    <HighlightOffIcon />
                </IconButton>
            </div>

            <button className="w-full flex flex-row justify-center items-center bg-blue-100 mt-5 rounded-md cursor-pointer" onClick={() => navigate("/createpage")}>
                <IconButton>
                    <AddIcon className="text-blue-500"/>
                </IconButton>
                <h2 className="text-[1rem] font-semibold text-blue-500">Create new page</h2>
            </button>



            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <HourglassEmptyIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Meta Business site</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <ExploreIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Discover</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <ThumbUpIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Liked Pages</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <PersonAddAlt1Icon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Invites</p>
            </div>

            
        </div>
    )
}

export default PageLeft;
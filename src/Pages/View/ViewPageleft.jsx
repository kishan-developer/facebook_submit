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


function ViewPageleft() {

    const navigate = useNavigate()

    return (
        <div className="">
            <div className="w-full flex flex-row justify-between items-center cursor-not-allowed">
                <h2 className="text-[1.5rem] font-bold">Manage Page</h2>
                <IconButton>
                    <HighlightOffIcon />
                </IconButton>
            </div>

            <button className="w-full flex flex-row  items-center  mt-5 rounded-md cursor-pointer">
                <Avatar src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709832.jpg?t=st=1719851735~exp=1719855335~hmac=e7c252cc0649147afa02f22c3c466ad33e3484970e19f2103beb93acb6f148f2&w=740" />
                <h2 className="text-[1.3rem] font-bold ml-5">User Name</h2>
            </button>

            <div className="h-[2px] mt-5 bg-gray-400"></div>

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

export default ViewPageleft;
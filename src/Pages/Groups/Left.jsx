import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import GroupsIcon from '@mui/icons-material/Groups';
import AddIcon from '@mui/icons-material/Add';


function Left() {
    return (
        <div className="">
            <div className="w-full flex flex-row justify-between items-center cursor-not-allowed">
                <h2 className="text-[1.5rem] font-bold">Groups</h2>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>

            <div className="flex flex-row bg-gray-300 rounded-full mt-10 cursor-not-allowed">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input type="text" className="w-auto pl-2 bg-transparent border-none outline-none" />
           </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <FeedIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Your Feed</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <DiscFullIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Discover</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <GroupsIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Your Groups</p>
            </div>

            <button className="w-full flex flex-row justify-center items-center bg-blue-100 mt-5 rounded-md cursor-not-allowed">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <h2 className="text-[1rem] font-bold">Create new groups</h2>
            </button>

        </div>
    )
}

export default Left;
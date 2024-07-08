import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import TuneIcon from '@mui/icons-material/Tune';
import ViewListIcon from '@mui/icons-material/ViewList';
import WindowIcon from '@mui/icons-material/Window';

function UserPostFilter() {
    return (
        <div className="w-full bg-white min-h-[auto] mt-5 rounded-md">
            <div className="flex flex-row justify-between items-center px-5">
                <h2 className="text-[1.3rem] font-bold">Posts</h2>
                <div className="flex flex-row py-2 gap-1">
                    <button className="flex flex-row items-center bg-gray-300 px-2 rounded-md h-11" >
                        <IconButton>
                            <TuneIcon />
                        </IconButton>
                        <span className="font-semibold">Filtes</span>
                    </button>
                    <button className="flex flex-row items-center bg-gray-300 px-2 rounded-md h-11" >
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                        <span className="font-semibold">Manage Posts</span>
                    </button>
                </div>
            </div>

            <div className="h-[1.1px] bg-gray-400"></div>
            <div className="w-full flex flex-row gap-2 py-1 px-2">
                <button className="w-1/2 flex flex-row justify-center items-center text-blue-500 font-semibold hover:bg-gray-200 hover:text-black rounded-md h-11" >
                    <IconButton>
                        <ViewListIcon />
                    </IconButton>
                    <span className="font-semibold">List View</span>
                </button>
                <button className="w-1/2 flex flex-row items-center justify-center text-blue-500 font-semibold hover:bg-gray-200 hover:text-black rounded-md h-11" >
                    <IconButton>
                        <WindowIcon />
                    </IconButton>
                    <span className="font-semibold">Grid View</span>
                </button>
            </div>
        </div>
    )
}

export default UserPostFilter;
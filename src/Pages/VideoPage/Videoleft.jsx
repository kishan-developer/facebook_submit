import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import StopCircleIcon from '@mui/icons-material/StopCircle';


function Videoleft() {
    return (
        <div className="">
            <div className="w-full flex flex-row justify-between items-center cursor-not-allowed">
                <h2 className="text-[1.5rem] font-bold">Video</h2>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>

            <button className="w-full flex flex-row justify-center items-center bg-blue-100 mt-5 rounded-md cursor-not-allowed">
                <IconButton>
                    <AddIcon />
                </IconButton>
                <h2 className="text-[1rem] font-bold">Create new groups</h2>
            </button>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <VideoLibraryIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Home</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <LiveTvIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Live</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <MovieCreationIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Reals</p>
            </div>

            <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed">
                <IconButton>
                    <StopCircleIcon />
                </IconButton>
                <p className="w-auto text-[1.2rem] font-semibold ">Shows</p>
            </div>

           

           

        </div>
    )
}

export default Videoleft;
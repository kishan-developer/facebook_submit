import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import FlagIcon from '@mui/icons-material/Flag';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarIcon from '@mui/icons-material/Star';
import CampaignIcon from '@mui/icons-material/Campaign';


function Create() {



    const handleCreatePage =()=> {
        // navigate('/createpage');
    }
    return (
        <div className="flex flex-col gap-3 ">
            <div className="flex flex-row gap-2 cursor-not-allowed items-center ">
                <IconButton>
                    <PermMediaIcon />
                </IconButton>


                <div className="flex flex-col">
                    <p className="text-md font-bold">Post</p>

                </div>
            </div>

            <div className="flex flex-row items-center gap-2 cursor-pointer" onClick={handleCreatePage}>
                <IconButton>
                    <FlagIcon />
                </IconButton>
                <div className="flex flex-col">
                    <p className="text-md font-bold">Create Page</p>
                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-not-allowed items-center ">
                <IconButton>
                    <TheatersIcon />
                </IconButton>
                <div className="flex flex-col">
                    <p className="text-md font-bold">Reel</p>

                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-not-allowed items-center ">
                <IconButton>
                    <StarIcon />
                </IconButton>
                <div className="flex flex-col">
                    <p className="text-md font-bold">Live event</p>

                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-not-allowed items-center ">
                <IconButton>
                    <CampaignIcon />
                </IconButton>
                <div className="flex flex-col">
                    <p className="text-md font-bold">Ad</p>

                </div>
            </div>




        </div>
    )
}

export default Create;
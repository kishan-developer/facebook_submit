import React from 'react';
import '../Social/Social.css';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PeopleIcon from '@mui/icons-material/People';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';

import { useNavigate } from 'react-router-dom';

function Social() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-3 ">

            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => navigate("/video")}>
                <EventRepeatIcon/>
                <div className="flex flex-col">
                    <p className="text-md font-bold">Videos</p>
                    <p>
                        Organize or find events and other things to do online and nearlby.
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => navigate("/friends")}>
                <PeopleIcon />
                <div className="flex flex-col">
                    <p className="text-md font-bold">Friends</p>
                    <p>
                        Search for friends and People you know
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => navigate("/group")}>
                <Groups2RoundedIcon />
                <div className="flex flex-col">
                    <p className="text-md font-bold">Groups</p>
                    <p>
                        Organize or find events and other things to do online and nearlby.
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-not-allowed" >
                <MoveToInboxRoundedIcon />
                <div className="flex flex-col">
                    <p className="text-md font-bold">Feeds</p>
                    <p>
                        Organize or find events and other things to do online and nearlby.
                    </p>
                </div>
            </div>

            <div className="flex flex-row gap-2 cursor-pointer" onClick={() => navigate("/pages")}>
                <AssistantPhotoIcon />
                <div className="flex flex-col">
                    <p className="text-md font-bold">Pages</p>
                    <p>
                        Organize or find events and other things to do online and nearlby.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Social;
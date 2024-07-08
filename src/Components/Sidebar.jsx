import React from 'react'
// import SidebarOption from './SidebarOption';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import '../CSS/Sidebar.css';
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from '@material-ui/core';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import StoreIcon from '@mui/icons-material/Store';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

function Sidebar() {
    const navigate = useNavigate();

    const user_details = JSON.parse(localStorage.getItem("User_Details"));
    console.log(user_details?.user?.name);

    return (
        <div className="w-full p-5 flex flex-col gap-2">
            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md py-2" onClick={() => navigate('/profile')}>
                <Avatar style={{ width: "50px", height: "50px" }} src={"https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319900/319946.png"} />
                <p className=" text-[1.2rem] font-semibold">{user_details?.user?.name}</p>

            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md cursor-not-allowed" onClick={() => navigate('/profile')}>
                <IconButton>
                    <PeopleIcon style={{ color: "blue", width: "30px", height: "30px" }}  />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">COVID-19 Information Center</p>
            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md" onClick={() => navigate('/friends')}>
                <IconButton>
                    <LoyaltyIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Friends</p>
            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md" onClick={() => navigate('/usermainpage') }>
                <IconButton>
                    <AssistantPhotoIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Pages</p>
            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md" onClick={() => navigate('/video')}>
                <IconButton>
                    <VideoSettingsIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Videos</p>
            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md cursor-not-allowed" onClick={() => navigate('/profile')}>
                <IconButton>
                    <LoyaltyIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Memories</p>
            </div>

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md cursor-not-allowed" onClick={() => navigate('/profile')}>
                <IconButton>
                    <LoyaltyIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Saved</p>
            </div>

            

           

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md cursor-not-allowed" onClick={() => navigate('/profile')}>
                <IconButton>
                    <OndemandVideoIcon style={{ color: "blue", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Groups</p>
            </div>

           

            <div className="flex items-center gap-3 hover:bg-gray-200 rounded-md" onClick={() => navigate('/profile')}>
                <IconButton>
                    <StoreIcon style={{ color: "#3b5998", width: "30px", height: "30px" }} />
                </IconButton>
                <p className=" text-[0.9rem] font-bold">Marketplace</p>
            </div>
        </div>
    )
}

export default Sidebar
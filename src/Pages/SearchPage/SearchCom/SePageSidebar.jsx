import React from 'react';
// import SidebarOption from '../../../Components/SidebarOption.jsx';
import Options from '../SearchCom/Options.jsx';

// icons
import ContactsIcon from '@mui/icons-material/Contacts';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import StoreIcon from '@mui/icons-material/Store';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function SePageSidebar() {
    return (
        <div className="w-full p-2 flex flex-col gap-5">
            <h1 className="text-[1.5rem] font-bold">Search results</h1>
            <div className="bg-gray-500 h-1 w-full"></div>
            <div className="w-auto h-fit">
                <Options Icon={ContactsIcon} title="All" />

                <Options Icon={LocalPostOfficeIcon} title="Post" />

                <Options Icon={GroupIcon} title="People" />

                <Options Icon={CollectionsIcon} title="Photos" />

                <Options Icon={VideoSettingsIcon} title="Videos" />

                <Options Icon={StoreIcon} title="Marketplace" />

                <Options Icon={AssistantPhotoIcon} title="Pages" />

                <Options Icon={AddLocationAltIcon} title="Places" />

                <Options Icon={GroupsIcon} title="Groups" />

                <Options Icon={EmojiEventsIcon} title="Events" />


            </div>
        </div>
    )
}

export default SePageSidebar;
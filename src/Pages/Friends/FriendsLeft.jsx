import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

import PeopleIcon from '@mui/icons-material/People';
import Person3Icon from '@mui/icons-material/Person3';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
// import FriendsLeft from './FriendsLeft';

function FriendsLeft() {
  return (
      <div className="">
          <div className="w-full flex flex-row justify-between items-center cursor-not-allowed">
              <h2 className="text-[1.5rem] font-bold">Friends</h2>
              <IconButton>
                  <SettingsIcon />
              </IconButton>
          </div>

          <div className="w-full h-[1px] bg-gray-500"></div>

          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md mt-5 cursor-not-allowed hover:text-blue-600">
              <IconButton >
                  <PeopleIcon />
              </IconButton>
              <p className="w-auto text-[1rem] font-semibold ">Home</p>
          </div>

          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md  cursor-not-allowed hover:text-blue-600">
              <IconButton>
                  <Person3Icon />
              </IconButton>
              <p className="w-auto text-[1rem] font-semibold ">Friends Requests</p>
          </div>

          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 rounded-md  cursor-not-allowed hover:text-blue-600">
              <IconButton>
                  <PersonAddIcon />
              </IconButton>
              <p className="w-auto text-[1rem] font-semibold ">Suggetions</p>
          </div>

          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 hover:text-blue-600 rounded-md cursor-not-allowed">
              <IconButton >
                  <CardGiftcardIcon  />
              </IconButton>
              <p className="w-auto text-[1rem] font-semibold ">Birthday</p>
          </div>

          <div className="flex flex-row gap-2 items-center hover:bg-gray-200 hover:text-blue-600 rounded-md cursor-not-allowed">
              <IconButton >
                  <RecentActorsIcon />
              </IconButton>
              <p className="w-auto text-[1rem] font-semibold ">Custom Lists</p>
          </div>

      </div>
  )
}

export default FriendsLeft;
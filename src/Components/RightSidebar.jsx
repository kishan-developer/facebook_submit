import React from 'react';
import '../CSS/RightSidebar.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Your Pages</h4>
        </div>
        <MoreHorizIcon />
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg"/>
          <h4>MS Dhoni</h4>
        </div>

        <div className="widget__bodyOptions m110">
          <NotificationsNoneIcon/>
          <p>1 Notification</p>
        </div>

        <div className="widget__bodyOptions m110">
          <VolumeUpIcon/>
          <h4>Create Promotion</h4>
        </div>
      </div>

      <hr/><br/>

      <div className="widget__header">
        <div className="widget__headerLeft">
          <h4>Contact</h4>
        </div>

        <div className="widget__headerRight">
          <VideocamIcon/>
          <SearchIcon/>
          <MoreHorizIcon />
        </div>
        
      </div>

      <div className="widget__body">
        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg" />
          <h4>MS Dhoni</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg" />
          <h4>Ashwin</h4>
        </div>
        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg" />
          <h4>Virat Kohli</h4>
        </div>

        <div className="widget__bodyOptions">
          <Avatar src="https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg" />
          <h4>KL Rahul</h4>
        </div>

        

      </div>


    </div>
  )
}

export default RightSidebar;
import React from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import Feed from '../../Components/Feed';
import Post from '../../Components/Post';
import RightSidebar from '../../Components/RightSidebar';
import '../../CSS/layout.css'

function Layout() {
  return (
    <div>
      {/* <Header/> */}
      <div className="main">
        <div className="sidebar_section">
          <Sidebar />
        </div>
        <div className="center_post">
          <Feed />
        </div>
        <div className="rightsidebar">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default Layout;
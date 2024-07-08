import React from 'react';
import Profile from '../ProfilePage/Profile'
import PostProfile from './PostProfile';
import Top from '../ProfilePage/Top'
import ProfileNav from '../ProfilePage/ProfileNav'
import ViewPageleft from './ViewPageleft';

function ViewPage() {
  return (
      <div className="w-full flex flex-row h-[auto]">
          <div className="left_child xl:w-[25%] lg:w-[25%] py-5 px-2 xl:block lg:block hidden ">
              {/* left component */}
              {/* <PageLeft /> */}
              <ViewPageleft/>
          </div>
          <div className="flex flex-col  bg-red-200 xl:w-[75%] lg:w-[75%]  w-[100%] h-[auto] py-5 px-6">
             {/* <Top/> */}
             <Profile/>
             {/* <ProfileNav/> */}
          </div>
      </div>
  )
}

export default ViewPage;
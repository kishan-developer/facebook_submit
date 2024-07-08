import React from 'react'
import Intro from './Intro';
import Photos from './Photos';
import Friends from './Friends';
import UserPosts from './UserPosts';
import '../PostsPage/PostStyle.css';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function Posts() {

  const { useAllData, setUserAllData } = useThemeContextValue()

  return (
    <div className="posts">
      <div className="left_child_posts ">
        {/* Intro */}
        <Intro useAllData={useAllData} />
        {/* Photos */}
        <Photos useAllData={useAllData} />
        {/* friends */}
        <Friends />
      </div>
      <div className="right_child_posts">
        {/* Userpost */}
        <UserPosts useAllData={useAllData?.data?._id}/>
      </div>

    </div>
  )
}

export default Posts;
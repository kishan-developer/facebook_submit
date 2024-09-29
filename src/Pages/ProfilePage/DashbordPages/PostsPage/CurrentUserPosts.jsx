import React,{useState} from 'react';
import { Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function CurrentUserPosts(data) {
  const [liked, setLiked] = useState(false);
  console.log(data)
  const UserName = localStorage.getItem("currentProfileName");

  return (
    <div className="bg-white rounded-lg p-3 my-5 flex flex-col">
      <div className="post_top">
        <div className="post_topLeft cursor-pointer" >
          <Avatar />
          <div className="postInfo">
            <h4>{UserName}</h4>
            <p>time line <PublicIcon /></p>
          </div>
        </div>


      </div>


      <div className="post_middle">
        <p>
          {data?.data?.content}
        </p>

        {data?.data?.images && <img src={data?.data?.images[0]} />}
        <div className="w-full flex justify-between items-center h-6 ">
          <p className="flex gap-2">👍💕 </p>
          <p className="flex gap-2">  <p>Comments</p></p>
        </div>

      </div>


      <div className="post__bottom">
        <div className="post__bottomOptions">
          <ThumbUpIcon 
            style={{ color: liked ? 'blue' : 'black', cursor: 'pointer' }}
          />
          <p style={{ color: liked ? 'blue' : 'black' }}>2K</p>
          <p style={{ color: liked ? 'blue' : 'black' }}>Like</p>
        </div>

        <div className="post__bottomOptions">
          <ChatBubbleOutlineIcon /> <p>500</p> <p>Comments</p>
        </div>

        <div className="post__bottomOptions">
          <ShareIcon /> <p>Shar</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentUserPosts
import React, { useEffect } from 'react';
import '../PostsPage/UserPostStyle.css';
import MessageSender from '../../../../Components/MessageSender.jsx';
import UserPostFilter from './UserPostFilter';
import Post from '../../../../Components/Post.jsx';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function UserPosts({ useAllData }) {
  const { postData, setPostData } = useThemeContextValue();
  console.log("useAllData", useAllData);

  function getUserAllPost(useAllData) {
    console.log("userId", useAllData);
    const myHeaders = new Headers();
    myHeaders.append("projectId", "ywl8a606ax3d");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`https://academics.newtonschool.co/api/v1/facebook/channel/${useAllData}/posts`, requestOptions)
      .then((response) => response.json())
      .then((result) => setPostData(result))
      .catch((error) => console.error(error));
  }

  console.log("useAllData : ", useAllData);

  console.log("use post Data (postData) : ", postData?.data)

  useEffect(() => {
    getUserAllPost(useAllData);
  }, []);


  return (
    <div className="user_Post rounded-md ">
      <MessageSender />
      <UserPostFilter />
      {/* <Posts/> */} 

      {
        postData?.data?.map((data, index) =>
          <div key={index}>
            <Post 
              data ={data} 
            />
          </div>
        )
      }

    </div>
  )
}

export default UserPosts;
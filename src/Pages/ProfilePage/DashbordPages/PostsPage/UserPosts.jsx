import React, { useEffect,useState } from 'react';
import '../PostsPage/UserPostStyle.css';
import MessageSender from '../../../../Components/MessageSender.jsx';
import UserPostFilter from './UserPostFilter';
import Post from '../../../../Components/Post.jsx';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';
import CurrentUserPosts from './CurrentUserPosts';

function UserPosts({ currentUserID }) {
  const [channelpostData, setChannelpostData ] = useState([]);
  const { postData, setPostData, } = useThemeContextValue();

  // get the user all post

  console.log("postData", postData);

  const userIds = localStorage.getItem("current_page_User_ID");
  console.log("userId", userIds)


  const user_details = JSON.parse(localStorage.getItem("User_Details"));
  console.log(user_details?.user?.name);

  // console.log("11......... current post data ", postData)
  const getUserAllPost = async (userIds) => {

    console.log(userIds);

    const token = localStorage.getItem("token");
    console.log(token)
    const projectId = "ywl8a606ax3d";
    const url = `https://academics.newtonschool.co/api/v1/facebook/channel/${userIds}/posts`;

    let myHeaders = new Headers();
    myHeaders.append("projectId", "ywl8a606ax3d");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);   //  ${getUser.token}

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      console.log("getUser post ", result)

      if (result && result.data) {
        console.log("result.data :- ", result.data);
        setChannelpostData(result.data)
      } else {
        console.error('Unexpected response format:', result);
      }


      // setChannelpostData(result)
      // setPostData(result?.data)
      // console.log("current post data postData", postData)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getUserAllPost(userIds);
  }, [])


  return (
    <div className="user_Post rounded-md ">
      <MessageSender getUserAllPost={getUserAllPost} />
      <UserPostFilter />
      {/* <Posts/> */}

      {/* {
        postData?.data?.map((data, index) =>
          <div key={index}>
            <Post data={data}/>
          </div>
        )
      } */}

      {/* Render user posts */}
      {channelpostData.length > 0 ? (
        channelpostData.map((data, index) => (
          <div key={index}>
            <CurrentUserPosts data={data} />
          </div>
        ))
      ) : (
        <p className="w-full h-[300px] bg-white my-5 rounded-lg flex items-center justify-center text-[2rem] font-semibold">No Posts Available.</p>
      )}

    </div>
  )
}

export default UserPosts;
import React ,{ useState }from 'react';
import '../CSS/Post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'; 
import ShareIcon from '@material-ui/icons/Share';
import {useThemeContextValue} from '../Utils/context/ThemeContext'
import PostComments from './PostComment/PostComments';
import PostEdit_Detete from '../Components/PostComponent/PostEdit_Delete';

function Post({ data }) {
    const [postLick , setPostLick] = useState(data?.like);
    const [liked, setLiked] = useState(false);

    const [editmodel , setEditModel] = useState(false);
    // console.log("like",like);

    const { model, setModel, postComments, setPostComments, comment, getUserFilterData } = useThemeContextValue();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    localStorage.setItem("userName", data?.author?.name);


    // console.log("post component data", data)
    // const props = { "id": id, "photoURL": photoURL , "image": image , "username":username, "timestamp": timestamp , "message":message, "like":like, "commentCount": commentCount }
    const handleIconClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    const hanldecomment = (id) => {
        // alert("post component id : ", id)
        handleIconClick();
        comment(id)
    }


    // POST: Use the below API for Liking a Post
    const likePost = async (postId) => {
        console.log("postId",postId);

        
        const token = localStorage.getItem("token");
        console.log(token)
        const projectId = "ywl8a606ax3d";
        const url = `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`;

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
        };

        try {
            const response = await fetch(url,requestOptions);
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }

            const result = await response.json();

            if (result.status === "fail") {
               alert(result.message);
              
            }
            if (result.status === "success") {
                setPostLick(postLick + 1);
                setLiked(true);
                alert(result.message);
            }


            // Update postLick and liked state
            
           

            console.log('API Response:', result);

        } catch (error) {
            console.error('Error:', error);
            // Handle the error
            alert('An error occurred while liking the post. Please try again later.');
        }
    };


    
    const postComment = async (postId) => {
        console.log(postId);

        const token = localStorage.getItem("token");
        console.log(token)
        const projectId = "ywl8a606ax3d";
        const url = `https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`;

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                comment: "Your comment here"  // Add comment body if required
            })
        };

        try {
            const response = await fetch(url,requestOptions);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('postComment:', result);
        } catch (error) {
            console.error('Error:', error);
            // Handle the error
            alert('An error occurred while Comment the post. Please try again later.');
        }
    };
    
    function fun(name){
        alert(name);
        getUserFilterData(name);
    }

   
    return (
        <div className="post">
            <div className="post_top">
                <div className="post_topLeft cursor-pointer" onClick={() => fun(data?.author?.name)}>
                    <Avatar src={data?.author?.profileImage}/>
                    <div className="postInfo">
                        <h4>{data?.author?.name}</h4>
                        <p>{data?.timestamp} <PublicIcon/></p>
                    </div>
                </div>
                <MoreHorizIcon onClick={() => setEditModel(!editmodel)} />
                
            </div>

            <div className="post_middle">
                <p>
                    {data?.content}
                </p>

                {data?.images && <img src={data?.images[0]}/>}
                <div className="w-full flex justify-between items-center h-6 ">
                    <p className="flex gap-2">👍💕 {data?.likeCount}</p>
                    <p className="flex gap-2">  <p>{data?.commentCount}</p> <p>Comments</p></p>
                </div>
            
            </div>

            <div className="post__bottom">
                <div className="post__bottomOptions">
                    <ThumbUpIcon onClick={() => likePost(data?._id)} 
                        style={{ color: liked ? 'blue' : 'black', cursor: 'pointer' }}
                        /> 
                    <p style={{ color: liked ? 'blue' : 'black' }}>{postLick}</p>
                    <p style={{ color: liked ? 'blue' : 'black' }}>Like</p>
                </div>

                <div className="post__bottomOptions" onClick={()=>hanldecomment(data?._id)}>
                    <ChatBubbleOutlineIcon /> <p>{data?.commentCount}</p> <p>Comments</p>
                </div>

                <div className="post__bottomOptions">
                    <ShareIcon /> <p>Shar</p>
                </div>
            </div>
            {/* comment model */}
            {isModalOpen && <PostComments data={data} postComments={postComments} closeModal={() => setIsModalOpen(false)} />}

            {editmodel && <PostEdit_Detete closeModal={() => setEditModel(!editmodel)} />}
        </div>
    )
}

export default Post;
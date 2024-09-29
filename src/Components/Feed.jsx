import { useEffect, useState } from 'react';
import '../CSS/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { useThemeContextValue } from '../Utils/context/ThemeContext';



function Feed() {
    const [page , setPage] = useState(1);
    const { postData, setPostData } = useThemeContextValue();
    
    function fetchPost(){
        const myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(`https://academics.newtonschool.co/api/v1/facebook/post?limit=10&page=${page}`, requestOptions)
            .then((response) => response.json())
            .then((result) => setPostData(result))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
       fetchPost();
    }, [page]);

    

    console.log("postData", postData)
    
    return (
        <div className="feed no-scrollbar">
            {/* StoryReels */}
            <StoryReel />

            {/* Message Sender */}
            <MessageSender fetchPost={fetchPost} />
            {/* Post */}

            {
                postData?.data?.map((data, index) => 
                   <div key={index}>
                        <Post
                            data={data}
                        />
                   </div>
                )
            }
            
            
        </div>
    )
}

export default Feed;
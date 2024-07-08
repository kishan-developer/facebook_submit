import React from 'react';
import '../PostComment/postComment.css';
import { Avatar } from '@material-ui/core';
import Post from '../Post';
import Comments from '../PostComment/Comments.jsx';
import AddComment from './AddComment';
// 
function PostComments({ closeModal, postComments, data }) {
    console.log("PostComment page ", postComments);
    // console.log("props ", props);
    // const { id, image, photoURL, username, timestamp, message, like, commentCount } = props;
    // console.log(id);

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content " onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={closeModal}>&times;</span>
                <div className="main w-full flex flex-col ">

                    <div className="flex flex-col w-full gap-3 h-full ">
                        <Post
                        data={data}
                            // photoURL={photoURL}
                            // image={image}
                            // username={username}
                            // timestamp={timestamp}
                            // message={message}
                            // like={like}
                            // commentCount={commentCount}
                            // id={id}
                        />

                        <div className="w-full h-fit">
                            <Comments />
                        </div>
                    </div>
                </div>

                <div className="add-comment-fixed">
                    <AddComment id={data?._id}/>
                </div>
            </div>
        </div>
    );
}

export default PostComments;

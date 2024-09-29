import React, { useState } from 'react';
import { Avatar, Modal, IconButton } from '@material-ui/core';
// import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
// import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import '../CSS/MessageSender.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { useThemeContextValue } from '../Utils/context/ThemeContext';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender({ fetchPost }) {
    const [open, setOpen] = useState(false);
    const { postTitle, setPostTitle, postImg, setPostImg } = useThemeContextValue();
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [postImgBinary, setPostImgBinary] = useState(null);

    const user_details = JSON.parse(localStorage.getItem("User_Details"));
    console.log(user_details?.user?.name);

    console.log("postImg", postImg);
    console.log("postTitle", postTitle);

    // handle image change 
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPostImg(file);

            // Create a URL for the image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);

            // Read the file as binary string
            const binaryReader = new FileReader();
            binaryReader.onloadend = () => {
                setPostImgBinary(binaryReader.result);
            };
            binaryReader.readAsArrayBuffer(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await AddNewPostFun();
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // add new post fun
    const AddNewPostFun = async()=> {
        alert("Add new post fun ")
        const token = localStorage.getItem("token");
        if (!token) {
            console.error('Token not found');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("projectId", "ywl8a606ax3d");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("title", "newton");
        formdata.append("content", postTitle);  // Assuming content is the same as title for this example
       
        // Create a blob from the binary data and append it to the formdata
        const blob = new Blob([postImgBinary], { type: postImg.type });
        formdata.append("images", blob, postImg.name);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://academics.newtonschool.co/api/v1/facebook/post/",requestOptions);
            if (!response.ok) {
                const errorText = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }
            const result = await response.json();
            console.log("add post fun : ",result)
           
            if(result.status){
                fetchPost();
            }

            setPostTitle('');
            setPostImg(null);
            setOpen(false);
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
    



    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <div className="modal_pop">
                    <form onSubmit={handleSubmit}>
                        <div className="modalHeading">
                            <h3>Create Post</h3>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <div className="modalHeader__top">
                            <Avatar />
                            <h5>{user_details?.user?.name}</h5>
                        </div>

                        <div className="modalBody">
                            <textarea
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                                rows="5"
                                placeholder="what's on your mind"
                                required >
                            </textarea>
                        </div>

                        <div className="modalFooter">
                            <div className="modalFooterLeft">
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    required 
                                />
                            </div>

                            <div className="modalFooterRight">
                                <IconButton>
                                    <PhotoLibraryIcon
                                        fontSize="medium"
                                        style={{ color: 'lightgreen' }}
                                    />
                                </IconButton>

                                <IconButton>
                                    <VideoCallIcon
                                        fontSize="medium"
                                        style={{ color: 'red' }}
                                    />
                                </IconButton>

                                <IconButton>
                                    <InsertEmoticonIcon
                                        fontSize="medium"
                                        style={{ color: '#ffb100' }}
                                    />
                                </IconButton>
                            </div>

                        </div>

                        <button type="submit" className="post_submit">POST</button>
                    </form>
                </div>
            </Modal>


            <div className="messageSender">
                <div className="messageSender_top">
                    <Avatar />

                    <form>
                        <input
                            type="text"
                            placeholder="What's on you mind Dhoni"
                            onClick={handleOpen}
                        />
                    </form>
                </div>


                <div className="messageSender_bottom">
                    <div className="messagerOption">
                        <VideoCallIcon style={{ color: 'red' }} className="icons" />
                        <p>Live Video</p>
                    </div>

                    <div className="messagerOption">
                        <PhotoLibraryIcon style={{ color: 'lightgreen' }} className="icons" />
                        <p>Photo/Video</p>
                    </div>

                    <div className="messagerOption">
                        <InsertEmoticonIcon style={{ color: '#ffb100' }} className="icons" />
                        <p>Feeling/Activity</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MessageSender;
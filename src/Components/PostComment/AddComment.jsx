import React,{ useState } from 'react'
import { useThemeContextValue } from '../../Utils/context/ThemeContext'
import { Avatar } from '@material-ui/core';
import StarIcon from '@mui/icons-material/Star';
import Face6Icon from '@mui/icons-material/Face6';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import GifBoxIcon from '@mui/icons-material/GifBox';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function AddComment({ id }) {
    const { AddComment, comments, setComment } = useThemeContextValue();

    
    // console.log("commnet ", comments);

    return (
        <div className="w-full h-full border-t-4 border-gray-200 flex flex-row items-center gap-5 py-3 px-2 ">
            <div className="h-full"><Avatar /></div>
            <div className="w-full bg-gray-100  h-full flex flex-col py-3 px-5 rounded-lg">
                <input
                    className="outline-none w-full bg-transparent"
                    type="text"
                    placeholder="Write a comment..."
                    value={comments}
                    onChange={(e)=> setComment(e.target.value)}
                />

                <div className="flex justify-between items-center px-3 ">
                    <div className="w-fit flex flex-row mt-1 gap-3 cursor-pointer">
                        <StarIcon style={{ color: "blue" }} />
                        <Face6Icon />
                        <SentimentSatisfiedAltIcon />
                        <CameraAltIcon />
                        <GifBoxIcon />
                        <StickyNote2Icon />
                    </div>
                    <button onClick={() => AddComment(id) } className="hover:bg-gray-500 py-2 px-2 rounded-full"><KeyboardDoubleArrowRightIcon /></button>
                </div>
            </div>
        </div>
    )
}

export default AddComment
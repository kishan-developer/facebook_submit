import React from 'react';
import { Avatar } from '@material-ui/core';
import { useThemeContextValue } from '../../Utils/context/ThemeContext'

function Comments() {
    const { postComments, setPostComments } = useThemeContextValue();
    // console.log(postComments);
    return (
        <>
            {postComments?.map((data, index) => (

                <div key={index} className="comments_list flex flex-row gap-2 py-3 px-3">
                    <Avatar />
                    <div className="flex flex-col gap-2">
                        <div className="bg-gray-300 rounded-xl w-[250px] py-1 px-3 font-semibold">
                            <h2>{data.author_details.name}<button className="text-blue-500 font-semibold py-1 ml-3">Follow</button></h2>
                            <p>{data.content}</p>
                        </div>
                        <div className="w-full flex justify-evenly items-center text-[0.8rem] ">
                            <span>4 d</span>
                            <span>Like</span>
                            <span>Reply</span>
                            <span>1</span>
                        </div>
                    </div>
                </div>


            ))}
        </>
    )
}

export default Comments;
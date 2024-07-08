import React from 'react';
import '../CSS/Story.css';
import { Avatar } from '@material-ui/core';

function StoryReel() {
    return (
        <div className="storyReel">
            <div 
            className="story" 
            style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2024/04/15/15/02/ai-generated-8698024_640.jpg')` }}>
                <Avatar />
                <h4>MS Dhoni</h4>
            </div>

            <div
                className="story"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2024/02/29/12/41/woman-8604350_1280.jpg')` }}>
                <Avatar />
                <h4>S Narayan</h4>
            </div>

            {/* <div
                className="story"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/19/16/44/questions-2519654_1280.png')` }}>
                <Avatar />
                <h4>MS Dhoni</h4>
            </div> */}

            <div
                className="story"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2024/04/13/02/09/a-woman-8693040_1280.jpg')` }}>
                <Avatar />
                <h4>Rohit Sharma</h4>
            </div>

            <div
                className="story"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_1280.jpg')` }}>
                <Avatar />
                <h4>Kunal Pandya</h4>
            </div>

            <div
                className="story"
                style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2024/04/13/02/09/whole-body-8693058_640.jpg')` }}>
                <Avatar />
                <h4>Bumrah</h4>
            </div>
        </div>
    )
}

export default StoryReel;
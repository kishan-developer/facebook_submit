import React from 'react';
import './ProfileNav.css';
import { useNavigate } from 'react-router-dom';


function ProfileNav() {
    const navigate = useNavigate();

    const navlist = ["Post", "Abouts", "Friends", "Photos", "Videos","More"];

    const handleButtonClick = (item) => {
        switch (item) {
            case "Post":
                navigate('posts');
                // Perform post action here
                break;
            case "Abouts":
                navigate('about')
                // Perform abouts action here
                break;
            case "Friends":
                navigate('friends')
                // Perform friends action here
                break;
            case "Photos":
                navigate('photos')
                // Perform photos action here
                break;
            case "Videos":
                navigate('videos')
                // Perform videos action here
                break;
            default:
                alert("Default action");
                break;
        }
    }

    return (
        <div className="profile_Nav flex flex-row justify-between items-center ">
            <div className="links w-full flex flec-row bg-yellow-300">
                {navlist.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleButtonClick(item)}
                        className=" hover:bg-gray-200 hover:border-b-4 border-blue-500 text-gray-500 cursor-pointer rounded-sm h-[4rem] font-semibold px-[1%]"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ProfileNav;
import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useThemeContextValue } from '../../../Utils/context/ThemeContext';

function LeftCreatePageForm() {

    const { pageName, setPageName, pageProfileImg, setPageProfileImg, pageCategory, setPageCategory, pageBio, setPageBio } = useThemeContextValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("form submitted");
    }

    const handleChangeImg =(event)=> {
        const file = event.target.files[0];
        console.log(file);
        setPageProfileImg(event.target.files[0]);
    }


    return (
        <div className="flex flex-col gap-1 px-3">
            <div className="top_left flex flex-row justify-between items-center">
                <Link to="/pages">pages / createpage</Link>
                <IconButton>
                    <HighlightOffIcon />
                </IconButton>
            </div>
            <h2 className="text-[1.5rem] font-bold">Create a Pages</h2>
            <p className="text-[0.9rem]">
                Your Page is where people go to learn more about you. Make sure yours has all the information they may need.
            </p>

            <form onSubmit={(e) => handleSubmit(e)} >
                <div> 
                    <input
                        value={pageName}
                        onChange={(e)=> setPageName(e.target.value)}
                        type="text"
                        placeholder="Page name (required)"
                        className="w-full border-[1px] border-gray-500 outline-none  pl-3 py-2 rounded-md mt-5"
                        required
                    />
                    <p className="text-[0.7rem]">
                        Use the name of your business, brand or organization, or a name that helps explain your Page. <span className="text-blue-600"><Link to="/pages">Learn More</Link></span>
                    </p>
                </div>

                <div>
                    <input
                        value={pageCategory}
                        onChange={(e)=> setPageCategory(e.target.value)}
                        type="text"
                        placeholder="Category (required) "
                        className="w-full border-[1px] border-gray-500 outline-none  pl-3 py-2 rounded-md mt-5"
                        required
                    />
                    <p className="text-[0.7rem]">
                        Enter a category that best describes you.
                    </p>
                </div>

                <div >
                    <textarea
                        value={pageBio}
                        onChange={(e)=> setPageBio(e.target.value)}
                        type="text"
                        placeholder="Bio (Optional) "
                        className="w-full border-[1px] border-gray-500 outline-none  pl-3 py-2 rounded-md mt-5 "
                      
                    />
                    <p className="text-[0.7rem]">
                        Tell discription about the page.
                    </p>
                </div>

                <div >
                    <input
                        onChange={handleChangeImg}
                        type="file"
                        className="w-full border-[1px] border-gray-500 outline-none  pl-3 py-2 rounded-md mt-5 "

                    />
                    <p className="text-[0.7rem]">
                        Enter a category that best describes you.
                    </p>
                </div>

                <button
                    className="w-full bg-blue-500 flex justify-center items-center font-semibold text-white py-1 text-[1.2rem] rounded-md mt-5"
                    type="submit"
                >
                    Create page
                </button>
                <p className="text-[0.7rem] mt-2">
                    By creating a Page, you agree to the <span className="text-blue-600"><Link> Pages, Groups and Events Policies</Link></span>
                </p>
            </form>
        </div>
    )
}

export default LeftCreatePageForm;
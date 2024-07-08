import React from 'react';
import Post from '../../Components/Post.jsx';
import { useThemeContextValue } from '../../Utils/context/ThemeContext.jsx';

function Content() {
    // const { searchData, setSearchData } = useThemeContextValue();

    // console.log("searchData", searchData);

    
  return (
    <div className="w-full bg-blue-100 p-10">
       <Post />
    </div>
  )
}

export default Content;
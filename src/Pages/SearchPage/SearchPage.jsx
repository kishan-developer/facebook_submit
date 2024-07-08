import React from 'react';
import Content from '../SearchPage/Content';
import LeftSidebar from './SearchModel';
import '../SearchPage/SearchPage.css';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';
import Post from '../../Components/Post.jsx';
import SePageSidebar from './SearchCom/SePageSidebar';
import Peoples from './SearchCom/Peoples';

function SearchPage() {
  const { searchData, setSearchData } = useThemeContextValue();

  console.log("searchData",searchData);

  return (
    <div className="searchpage_parent h-full">
      <div className="search_Page_left_child">
        <SePageSidebar/>
      </div>
      <div className="search_page_content bg-gray-200 h-[100%]">
        <Peoples  />
        {
          searchData ? (
            searchData.map((data, index) => (
              <div key={index}>
                
                <Post data={data} />
              </div>
            ))
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center font-semibold text-[2rem]">
                <h1>Data is Comming Soon🙂...</h1>
              <p>if you not gatting any data than go to search input and get the data..</p>
                <p>thank You🙏🙂....</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SearchPage;
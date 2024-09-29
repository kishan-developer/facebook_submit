import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { Avatar, IconButton } from '@material-ui/core';
import { useThemeContextValue } from '../../Utils/context/ThemeContext';

function SearchModel({ searchValue, handleChangeSeachData, closeModal, handleSearch }) {
  const navigate = useNavigate();

  const { searchData, getUserDetailFunc, postFunction, getUserAllData } = useThemeContextValue();
  // console.log("searchData searchmodel page ", searchData);

  const uniqueAuthors = [];
  const uniqueAuthorNames = new Set();

  searchData?.forEach(item => {
    if (item?.author?.name && !uniqueAuthorNames.has(item.author.name)) {
      // console.log("item", item);
      uniqueAuthors.push(item);
      uniqueAuthorNames.add(item.author.name);
    }
  });

  // console.log("all user searchData ", searchData);

  // Limit the number of unique authors to 6
  const limitedAuthors = uniqueAuthors.slice(0, 6);
  // console.log(limitedAuthors);

  const handleAuthor = async(authorId)=> {
    // e.preventDefault();
    console.log("current author Id : ", authorId)
    await getUserAllData(authorId);
    navigate('/profile');
  }

  return (
    <div className="max:w-[400px] bg-white h-[80vh] absolute top-0 left-0" >
      <div className="header_left  py-2 px-2 ">
        <FacebookIcon onClick={() => navigate('/')} fontSize="large" className="text-blue-500" />
        <div className="header_search ">
          <SearchIcon onClick={() => navigate('/searchpage')} />
          <input
            type="text"
            placeholder="Search Facebook"
            value={searchValue}
            onChange={(e) => handleChangeSeachData(e.target.value)}
          />
        </div>

        <CancelIcon onClick={closeModal} fontSize="large"  className="text-red-500 float-end" />
      </div>

      <div className="widget__body px-5 py-5  h-full">

        {limitedAuthors?.map((item , index)=> (
          <div key={index} className="widget__bodyOptions" onClick={()=> handleAuthor(item?.author?._id)}>
            <Avatar
              style={{ width: '50px', height: '50px' }} 
              src={item?.author?.profileImage || "https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=ais_user"}
            />
            <h4 className="font-semibold text-[1.5rem]">{item?.author?.name}</h4>
          </div>
        ))}
        
      </div>

    </div>
  )
}

export default SearchModel;
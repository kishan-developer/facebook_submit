import React from 'react'
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function Friends() {
  const { postData, setPostData } = useThemeContextValue();

  console.log("postData", postData);

  // const postData_9 = postData.slice(1,10);
  // console.log("postData_9 ",postData_9);

  return (
    <div className="w-auto bg-white min-h-[auto] rounded-md p-4 flex flex-row justify-between items-center">
      <p className="text-left text-[1.3rem] font-semibold">Friends</p>
      <button className="bg-gray-200 py-2 px-3 rounded-md font-semibold cursor-not-allowed text-blue-600">See more friends</button>
    </div>
  )
}

export default Friends;
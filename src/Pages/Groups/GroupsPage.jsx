import React from 'react'
import Left from './Left';

function GroupsPage() {
  return (
    <div className="w-full flex flex-row h-[100vh]">
          <div className="left_child w-[25%]  py-5 px-2">
            {/* left component */}
            <Left/>
        </div>
        <div className="flex  justify-center items-center bg-gray-200 w-[75%] h-[100vh]">
              <h2 className="text-[2rem] font-bold ">This page is coming soon !!</h2>
        </div>
    </div>
  )
}

export default GroupsPage;
import React from 'react'

function Photos() {
  return (
    <div className="w-auto bg-white min-h-[auto] rounded-md p-4 flex flex-row justify-between items-center">
      <p className="text-left text-[1.3rem] font-semibold">Photos</p>
      <button className="bg-gray-200 py-2 px-3 rounded-md font-semibold cursor-not-allowed text-blue-600">See more Photos</button>
    </div>
  )
}

export default Photos;
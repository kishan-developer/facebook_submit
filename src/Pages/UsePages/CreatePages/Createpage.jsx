import React from 'react'

import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LeftCreatePageForm from './LeftCreatePageForm';
import CreatePageMain from './CreatePageMain';

function Createpage() {
    return (
        <div className="w-full flex flex-row h-[auto]">
            <div className="left_child xl:w-[25%] lg:w-[25%] py-5 px-2 xl:block lg:block hidden">
                {/* left component */}
                <LeftCreatePageForm />
            </div>
            <div className="flex flex-col  bg-gray-200 xl:w-[75%] lg:w-[75%]  w-[100%] h-[auto] py-5 xl:px-6 lg:px-6 px-1">
                
                <div className=" grid grid-cols-1  xl:gap-10 lg:gap-10 gap-5 xl:py-5 lg:py-5 md:py-2 py-0 xl:px-10 lg:px-10 md:px-5  px-0">

                    <CreatePageMain/>

                </div>
            </div>
        </div>
    )
}

export default Createpage;
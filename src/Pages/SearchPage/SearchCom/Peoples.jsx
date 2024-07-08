import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

function Peoples() {
    return (
        <div className="w-full h-fit bg-white rounded-md  flex flex-col gap-5 p-3">
            <h1 className="w-full h-fit bg-white rounded-md">Peoples</h1>
            <div className="flex flex-row gap-5">

                <Avatar />

                <div className="w-full flex flex-row ">
                    <h2 className="w-full">People Name</h2>

                </div>
            </div>
        </div>
    )
}

export default Peoples;
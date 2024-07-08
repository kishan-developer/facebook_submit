import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

function Options({ Icon, title }) {
    return (
        <div className="w-full hover:bg-white cursor-pointer flex items-center gap-3 hover:rounded-md ">
            <IconButton >
                {Icon && <Icon fontSize="medium" />}
            </IconButton>
            <p className="font-semibold text-[1rem]">{title}</p>
        </div>
    )
}

export default Options;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AboutLeft() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col p-3 gap-3">
            <h2 className="font-bold text-[1.5rem] ">About</h2>
            <ul>
                <li
                    className="text-[1.3rem] font-semibold cursor-pointer hover:bg-blue-100 rounded-md px-2 py-1"
                    onClick={() => navigate("overview")}
                >
                    Overview
                </li>

                <li
                    className="text-[1.3rem] font-semibold cursor-pointer hover:bg-blue-100 rounded-md px-2 py-1"
                    onClick={() => navigate("work")}
                >
                    work
                </li>

                <li
                    className="text-[1.3rem] font-semibold cursor-pointer hover:bg-blue-100 rounded-md px-2 py-1"
                    onClick={() => navigate("place")}
                >
                    place
                </li>
                <li
                    className="text-[1.3rem] font-semibold cursor-pointer hover:bg-blue-100 rounded-md px-2 py-1"
                    onClick={() => navigate("skill")}
                >
                    skill
                </li>
            </ul>
        </div>
    )
}

export default AboutLeft;
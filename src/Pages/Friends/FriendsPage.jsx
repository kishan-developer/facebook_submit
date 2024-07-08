import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';


import FriendsLeft from './FriendsLeft';

function FriendsPage() {


    return (
        <div className="w-full flex flex-row h-[auto]">
            <div className="left_child xl:w-[25%] lg:w-[25%]  py-5 px-2 xl:block lg:block hidden">
                {/* left component */}
                <FriendsLeft />
            </div>
            <div className="flex flex-col  bg-gray-200 xl:w-[75%] lg:w-[75%]  w-[100%] h-[auto] py-5 px-6">
                <h2 className="text-[2rem] font-bold ">All Friends</h2>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-10 lg:gap-10 gap-5 xl:py-5 lg:py-5 md:py-2 py-0 xl:px-10 lg:px-10 md:px-5 px-2">

                   
                   

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img 
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6839.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt="" 
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-curly-hair-brown-hat_1142-42780.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6838.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/premium-photo/memoji-beautiful-girl-woman-white-background-emoji_826801-6872.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/3d-rendering-boy-cap-glasses-with-backpack_1142-43584.jpg?size=626&ext=jpg&uid=R70899013&ga=GA1.1.1233904281.1701158192&semt=sph" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709832.jpg?t=st=1719851735~exp=1719855335~hmac=e7c252cc0649147afa02f22c3c466ad33e3484970e19f2103beb93acb6f148f2&w=740" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?t=st=1719851806~exp=1719855406~hmac=f3478d346204b24be1e144b558b3b4b181a2ad0dd8e1592be99919b151603fab&w=740" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                    <div className="w-[100%] h-[auto]  flex flex-col rounded-md bg-white">
                        <img
                            className="w-[100%] h-[85%] rounded-t-md"
                            src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709830.jpg?t=st=1719851272~exp=1719854872~hmac=66c5af909dd368da8d05f9fe49afa89b4b04898c200bb0eeeaabe846a8c29283&w=740" alt=""
                        />
                        <p className="h-[15%]  flex justify-center items-center text-[1rem] font-semibold ">User Name</p>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default FriendsPage;
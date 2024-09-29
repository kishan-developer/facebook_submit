import { useState , useEffect} from 'react'
import Login from '../Login/Login.jsx';
import Header from '../../Components/Header';
import '../../Pages/Home/Home.css';
import Sidebar from '../../Components/Sidebar.jsx';
import Feed from '../../Components/Feed.jsx';
import RightSidebar from '../../Components/RightSidebar.jsx';
import { useThemeContextValue } from '../../Utils/context/ThemeContext.jsx';

function Home() {

    const { auth, setAuth, authCheck ,setAuthCheck } = useThemeContextValue();
    

    const handleScroll = () => {
        console.log("Height", document.documentElement.scrollHeight);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])


    return (
        <>
            { authCheck ? (
                <div className="main w-full " >
                    <div className="sidebar_section no-scrollbar">
                        <Sidebar />
                    </div>
                    <div className="center_post no-scrollbar overflow-auto">
                        <Feed />
                    </div>
                    <div className="rightsidebar">
                        <RightSidebar />
                    </div>
                </div>
        ) : (
            <Login/>
        )
    }
            
        </>

    );
}

export default Home;

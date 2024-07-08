import { useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Utils/Routes/Layout';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignIn from './Pages/Login/SignIn';
import { useThemeContextValue } from './Utils/context/ThemeContext';
import LoginForm from './Pages/Login/LoginForm';
import Profile from './Pages/ProfilePage/Profile.jsx';
import Covid from './Pages/CovidPage/Covid.jsx';
import SearchPage from './Pages/SearchPage/SearchPage';
import Posts from './Pages/ProfilePage/DashbordPages/PostsPage/Posts';
import About from './Pages/ProfilePage/DashbordPages/AboutPage/About';
import Overviews from './Pages/ProfilePage/DashbordPages/AboutPage/Overviews.jsx';
import Work from './Pages/ProfilePage/DashbordPages/AboutPage/Work.jsx';
import Place from './Pages/ProfilePage/DashbordPages/AboutPage/Place.jsx';
import Skill from './Pages/ProfilePage/DashbordPages/AboutPage/Skill';
import Video from './Pages/VideoPage/Video';
import FriendsPage from './Pages/Friends/FriendsPage';
import GroupsPage from './Pages/Groups/GroupsPage';
import Pages from './Pages/UsePages/Pages';
import Createpage from './Pages/UsePages/CreatePages/Createpage';
import ViewPage from './Pages/View/ViewPage';
import UserMainPage from './Pages/UsePages/UserMainPage';

function App() {
  const { auth, setAuth, authCheck } = useThemeContextValue();

  return (
    <div className="app_body">
      {authCheck && <Header />}

      {authCheck ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route path="/covidPage" element={<Covid />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/video" element={<Video />} />
          <Route path="/group" element={<GroupsPage />} />

          <Route path="/usermainpage" element={<UserMainPage />} >
            <Route index element={<Pages />} />
            <Route path="pages" element={<Pages />} />
            <Route path="viewpage" element={<ViewPage />} >
              {/* <Route path="profile" element={<Profile />} >
                <Route index element={<Posts />} />
                <Route path="posts" element={<Posts />} />

                
              </Route> */}
              <Route path="createpage" element={<Createpage />} />


            </Route>
          </Route>


            <Route path="/createpage" element={<Createpage />} />
            <Route path="/market" element={<h3>market</h3>} />

            <Route path="/profile" element={<Profile />} >
              <Route index element={<Posts />} />
              <Route path="posts" element={<Posts />} />

              <Route path="about" element={<About />} >
                <Route index element={<Overviews />} />
                <Route path="overview" element={<Overviews />} />
                <Route path="work" element={<Work />} />
                <Route path="place" element={<Place />} />
                <Route path="skill" element={<Skill />} />

              </Route>

              <Route path="friends" element={<h2>Friends</h2>} />
              <Route path="photos" element={<h2>photo</h2>} />
              <Route path="videos" element={<h2>video</h2>} />
            </Route>




            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/loginpage" element={<LoginForm />} />
          <Route path="/signInPage" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/loginpage" />} />
        </Routes>
      )
      }
    </div >
  );
}

export default App;

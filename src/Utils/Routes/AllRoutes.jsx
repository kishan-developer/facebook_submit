import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import LoginPage from '../../Pages/LoginPage';
import Login from '../../Pages/Login';
import Watch from '../../Pages/Watch/Watch';

import Layout from './Layout';


function AllRoutes() {
  return (
    <>
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route path="/" element={<h2>Main page</h2>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/loginForm" element={<LoginPage />} />
          <route path="/about" element={<h2>About</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes;
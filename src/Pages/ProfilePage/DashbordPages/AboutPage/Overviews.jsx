import React from 'react';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function P1() {

  const { useAllData, setUserAllData, currentUserDetails } = useThemeContextValue()
  return (
    <section >
      <h2>Over View</h2>
      <div>
        
        <p>Name : {currentUserDetails?.data?.owner?.name}</p>
        <p>Email : {currentUserDetails?.data?.owner?.email}</p>
        <p>Gender : {currentUserDetails?.data?.owner?.gender}</p>
        <p>Phone No  : {currentUserDetails?.data?.owner?.phone}</p>
      </div>
    </section>
  )
}

export default P1;
import React from 'react';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function p3() {

  const { useAllData, setUserAllData, currentUserDetails } = useThemeContextValue()
    
  return (
    <section >
      <h2>User Place Section</h2>
      <div>
        <p>city : {currentUserDetails?.data?.owner?.address[0]?.city}</p>
        <p>country : {currentUserDetails?.data?.owner?.address[0]?.country}</p>
        <p> state : {currentUserDetails?.data?.owner?.address[0]?.state}</p>
        <p>street : {currentUserDetails?.data?.owner?.address[0]?.street}</p>
        <p>zipCode : {currentUserDetails?.data?.owner?.address[0]?.zipCode}</p>
      </div>
    </section>
  )
}

export default p3;
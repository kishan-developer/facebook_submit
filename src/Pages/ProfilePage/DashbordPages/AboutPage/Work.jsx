import React from 'react';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';


function p2() {

  const { useAllData, setUserAllData, currentUserDetails } = useThemeContextValue()
    
  return (
    <section >
      <h2>Work</h2>
      <div>
        <p>companyName : {currentUserDetails?.data?.owner?.workExperience[0]?.companyName}</p>
        <p>description : {currentUserDetails?.data?.owner?.workExperience[0]?.description}</p>
        <p>designation : {currentUserDetails?.data?.owner?.workExperience[0]?.designation}</p>
        <p>location    : {currentUserDetails?.data?.owner?.workExperience[0]?.location}</p>
        {/* <p>zipCode : {currentUserDetails?.data?.owner?.address[0]?.zipCode}</p> */}
      </div>
    </section>
  )
}

export default p2;
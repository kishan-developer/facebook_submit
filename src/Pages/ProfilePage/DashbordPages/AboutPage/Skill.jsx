import React from 'react';
import { useThemeContextValue } from '../../../../Utils/context/ThemeContext';

function Skill() {
  const { useAllData, setUserAllData, currentUserDetails } = useThemeContextValue()

  return (
    <section >
      <h1>Skills </h1>
      <div>

        <ul>
          {currentUserDetails?.data?.owner?.skills?.map((data , i)=> (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skill;
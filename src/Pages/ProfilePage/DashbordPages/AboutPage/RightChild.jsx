import React from 'react';
import { Outlet } from 'react-router-dom';

function RightChild() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default RightChild;
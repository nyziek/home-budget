import React from 'react';
import { Outlet } from 'react-router-dom';
import './AppWindow.scss';

const AppWindow = () => {

  return (
    <div className='AppWindow'>
      <Outlet />
    </div>
  );
}

export default AppWindow;

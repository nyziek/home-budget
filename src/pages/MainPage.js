import React from 'react';
import './MainPage.scss';

import SideBar from "../layouts/SideBar";
import Header from "../layouts/Header";
import AppWindow from "../layouts/AppWindow";

const MainPage = () => {

  return (
    <div className='MainPage'>
      <SideBar />
      <div className='MainPageWindow'>
        <Header />
        <AppWindow />
      </div>
    </div>
  );
}

export default MainPage;

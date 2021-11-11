import React, { useContext } from 'react';
import './Header.scss';

import APP_ICON from '../assets/icons/app_icon.png'

import {I18nContext} from '../contexts/I18nContext';

const Header = () => {
  const { t } = useContext(I18nContext);

  return (
    <div className='Header'>
      <div className='headerLeft'>
        <img className='appLogo' src={APP_ICON} alt='app icon' />
        <h1 className='appName'>{t('home budget planner', 'title')}</h1>
      </div>
      <div className='headerRight'>

      </div>
    </div>
  );
}

export default Header;

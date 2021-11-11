import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBarNav.scss';

import {I18nContext} from '../../contexts/I18nContext';

const SideBarNav = ({ expanded }) => {
  const { t } = useContext(I18nContext);
  const navItems = [
    {to: '/', name: t('dashboard'), icon: 'analytics'},
    {to: 'budget', name: t('budget'), icon: 'account_balance_wallet'},
    {to: 'savings', name: t('savings'), icon: 'savings'},
    {to: 'debts', name: t('debts'), icon: 'credit_card'},
    {to: 'settings', name: t('settings'), icon: 'settings'},
  ]

  return (
    <nav className='SideBarNav'>
      {navItems.map(navItem => (
        <NavLink key={navItem.to} className={`navLink ${expanded ? 'navLink--expanded' : ''}`} to={navItem.to}>
          <span className='material-icons navLinkIcon'>{navItem.icon}</span>
          <div className='navLinkLabel'>{navItem.name}</div>
        </NavLink>
      ))}
    </nav>
  );
}

export default SideBarNav;

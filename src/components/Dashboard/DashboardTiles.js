import React from 'react';
import './DashboardTiles.scss';

const DashboardTiles = ({children}) => {
  return (
    <div className='dashboardTiles'>
      {children}
    </div>
  )
}

export default DashboardTiles;

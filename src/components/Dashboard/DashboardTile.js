import React from 'react';
import './DashboardTile.scss';

const DashboardTile = ({icon, title, children}) => {
  return (
    <div className='dashboardTile'>
      <div className='dashboardTileTitle'>
        {!!icon && <span className='material-icons dashboardTileIcon'>{icon}</span>}
        {title}
      </div>
      <div className='dashboardTileContent'>
        {children}
      </div>
    </div>
  )
}

export default DashboardTile;

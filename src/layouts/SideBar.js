import React, { useState } from 'react';
import './SideBar.scss';

import SideBarNav from '../components/SideBarNav/SideBarNav';

const SideBar = () => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpandSideBar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`SideBar ${expanded ? 'SideBar--expanded' : ''}`}>
      <div className='sideBarTop'>
        <div className='sideBarExpandButton' onClick={toggleExpandSideBar}>
          <span className='material-icons sideBarExpandButtonIcon'>{expanded ? 'chevron_left' : 'chevron_right'}</span>
        </div>
        <SideBarNav expanded={expanded} />
      </div>
    </div>
  );
}

export default SideBar;

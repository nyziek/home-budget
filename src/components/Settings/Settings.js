import React, {useContext} from 'react';
import './Settings.scss';

import {I18nContext} from '../../contexts/I18nContext';

const Settings = () => {
  const { t } = useContext(I18nContext);

  return (
    <div>
      <h2>{t('settings', 'upper')}</h2>
    </div>
  )
}

export default Settings;

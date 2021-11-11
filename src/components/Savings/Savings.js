import React, {useContext} from 'react';
import './Savings.scss';

import {I18nContext} from '../../contexts/I18nContext';

const Savings = () => {
  const { t } = useContext(I18nContext);

  return (
    <div>
      <h2>{t('savings', 'upper')}</h2>
    </div>
  )
}

export default Savings;

import React, {useContext} from 'react';
import './Budget.scss';

import {I18nContext} from '../../contexts/I18nContext';

const Budget = () => {
  const { t } = useContext(I18nContext);

  return (
    <div>
      <h2>{t('budget', 'upper')}</h2>
    </div>
  )
}

export default Budget;

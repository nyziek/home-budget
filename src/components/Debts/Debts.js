import React, {useContext} from 'react';
import './Debts.scss';

import {I18nContext} from '../../contexts/I18nContext';

const Debts = () => {
  const { t } = useContext(I18nContext);

  return (
    <div>
      <h2>{t('debts', 'upper')}</h2>
    </div>
  )
}

export default Debts;

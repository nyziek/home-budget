import React, { useContext } from 'react';
import './LoginPage.scss';

import {I18nContext} from '../contexts/I18nContext';

const LoginPage = () => {
  const { t } = useContext(I18nContext);

  return (
    <div className='LoginPage'>
      {t('login')}
    </div>
  );
}

export default LoginPage;

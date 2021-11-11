import React, {useContext} from 'react';
import './Dashboard.scss';

import DashboardTiles from './DashboardTiles';
import DashboardTile from './DashboardTile';
import DashboardIncomeTileContent from './DashboardIncomeTileContent';
import DashboardExpensesTileContent from './DashboardExpensesTileContent';
import DashboardSavingsTileContent from './DashboardSavingsTileContent';
import DashboardDebtsTileContent from './DashboardDebtsTileContent';

import {I18nContext} from '../../contexts/I18nContext';

const Dashboard = () => {
  const { t } = useContext(I18nContext);

  return (
    <div className='Dashboard'>
      <DashboardTiles>
        <DashboardTile title={t('income', 'upper')} icon='monetization_on'>
          <DashboardIncomeTileContent />
        </DashboardTile>
        <DashboardTile title={t('expenses', 'upper')} icon='shopping_cart'>
          <DashboardExpensesTileContent />
        </DashboardTile>
        <DashboardTile title={t('savings', 'upper')} icon='savings'>
          <DashboardSavingsTileContent />
        </DashboardTile>
        <DashboardTile title={t('debts', 'upper')} icon='credit_card'>
          <DashboardDebtsTileContent />
        </DashboardTile>
      </DashboardTiles>
    </div>
  )
}

export default Dashboard;

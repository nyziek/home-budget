import React, {useContext} from 'react';
import './DashboardTileContent.scss';

import {I18nContext} from '../../contexts/I18nContext';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardIncomeTileContent = () => {
  const { t } = useContext(I18nContext);

  const data = [
    {
      name: t('january'),
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: t('february'),
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: t('march'),
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: t('april'),
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: t('may'),
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: t('june'),
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: t('july'),
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className='DashboardTileContent'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#DB5ABA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardIncomeTileContent;

import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.scss';

import I18nContextProvider from './contexts/I18nContext';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Dashboard from './components/Dashboard/Dashboard';
import Budget from './components/Budget/Budget';
import Savings from './components/Savings/Savings';
import Debts from './components/Debts/Debts';
import Settings from './components/Settings/Settings';

const PrivateRoute = ({ children }) => {
  const auth = 1 === 1;
  // @TODO Change auth to below once login functionality is implemented
  // const auth = sessionStorage.getItem('homeBudgetToken') && (getTokenExp() > Date.now() / 1000);
  return auth ? children : <Navigate to="/login" />;
}

const App = () => {
  return (
    <I18nContextProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/login'
              element={<LoginPage />}
            />
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            >
              <Route
                path='/'
                element={<Dashboard />}
              />
              <Route
                path='budget'
                element={<Budget />}
              />
              <Route
                path='savings'
                element={<Savings />}
              />
              <Route
                path='debts'
                element={<Debts />}
              />
              <Route
                path='settings'
                element={<Settings />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </I18nContextProvider>
  );
}

export default App;

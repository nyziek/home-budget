import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import './App.scss';

import I18nContextProvider from './contexts/I18nContext';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

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
                element={<div>DASHBOARD</div>}
              />
              <Route
                path='budget'
                element={<div>BUDGET</div>}
              />
              <Route
                path='savings'
                element={<div>SAVINGS</div>}
              />
              <Route
                path='settings'
                element={<div>SETTINGS</div>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </I18nContextProvider>
  );
}

export default App;

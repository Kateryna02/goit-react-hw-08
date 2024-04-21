

import React from 'react';

import './app.css'

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';

import NotFound from '../pages/NotFound';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';
import Registor from '../pages/Registor';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivatRoute from '../route/PrivatRoute';
import PublicRoute from '../route/PublicRoute';
import { useDispatch } from 'react-redux';
import { currentUser } from '../redux/auth/operations';
import { useEffect } from 'react';

const App = () => {
 const dispatch = useDispatch();
useEffect(() => {
  dispatch(currentUser())
}, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={
            <PrivatRoute>
              <Contacts />
            </PrivatRoute>} />

        </Route>
        <Route path='/login' element={
          <PublicRoute>
            <Login/>
          </PublicRoute>
        } />
        <Route path='/registor' element={<Registor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
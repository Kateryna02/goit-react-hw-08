

import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Layout from './Layout';
import PrivatRoute from '../route/PrivatRoute';
import PublicRoute from '../route/PublicRoute';
import { currentUser } from '../redux/auth/operations';
import Louder from './Louder';
import './app.css'

const Home = lazy(() => import('../pages/Home'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Login = lazy(() => import('../pages/Login'))
const Registor = lazy(() => import('../pages/Registor'))

const App = () => {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  console.log(isRefreshing);
  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch]);
  return isRefreshing ? (
    <Louder />
  ) : (
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
            <Login />
          </PublicRoute>
        } />
        <Route path='/registor' element={
          <PublicRoute>
            <Registor />
          </PublicRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
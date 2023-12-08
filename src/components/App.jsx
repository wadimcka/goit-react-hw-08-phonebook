import React, { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/operations';
import * as ROUTE from '../constants/routes.js';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Loader } from './Loader/Loader';
import { useAuth } from './hooks/uaeAuth.js';

const HomePage = lazy(() => import('../pages/Home/HomePage.jsx'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage.jsx'));
const LoginPage = lazy(() => import('pages/Login/LoginPage.jsx'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage.jsx'));

const appRoutes = [
  { path: ROUTE.HOME_ROUTE, element: <HomePage /> },
  {
    path: ROUTE.REGISTER_ROUTE,
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTE.LOGIN_ROUTE,
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTE.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoading } = useAuth();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isRefreshing && isLoading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      )}
    </Suspense>
  );
};

export default App;

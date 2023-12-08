import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

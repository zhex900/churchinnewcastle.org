import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import UpdateAvailable from '../UpdateAvailable';

export default function Layout({ children }: { children: React.ReactNode }) {
  const isNotCi = !process?.env?.CI_TEST;

  return (
    <>
      <Header />
      <div id='skip-nav'>{children}</div>
      <Footer />
      {isNotCi && <UpdateAvailable className='absolute bottom-5 right-5' />}
    </>
  );
}

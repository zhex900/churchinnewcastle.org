import * as React from 'react';

// import sayHello from '@/lib/sayHello';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

// import { sayHelloFlag } from '@/constants/env';

// const saidHello = !sayHelloFlag;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div id='skip-nav'>{children}</div>
      <Footer />
    </>
  );
}

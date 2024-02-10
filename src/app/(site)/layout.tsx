
import Footer from '@/components/landingPage/footer/page';
import Navbar from '@/components/landingPage/navbar/page';
import React from 'react';

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
            {children}
    </main>
  );
};

export default HomePageLayout;

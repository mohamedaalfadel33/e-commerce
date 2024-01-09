import { SignedIn, UserButton } from '@clerk/nextjs';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className=" bg-slate-100 flex-grow">
      <header className="flex justify-between">
        <h2>Hello,</h2>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </header>
    </div>
  );
};

export default DashboardPage;

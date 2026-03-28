import React from 'react';
import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="bg-white h-20 shadow-md w-full sticky top-0 z-50 flex items-center justify-center px-6 md:px-16">
      <div className="flex items-center gap-1">
        <Logo className="w-[100px] h-[48px]" />
      </div>
    </header>
  );
};
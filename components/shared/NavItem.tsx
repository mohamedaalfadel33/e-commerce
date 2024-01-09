'use client';
import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  text: string;
  href: string;
  icon: React.ReactNode;
};

const NavItem = ({ text, href, icon }: NavItemProps) => {
  const isActive = '';
  return (
    <Link
      href={href}
      className="hover:bg-slate-100 flex gap-2 p-4  hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50   whitespace-nowrap  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300"
    >
      {icon}
      <h2 className="font-bold text-4xl">{text}</h2>
    </Link>
  );
};

export default NavItem;

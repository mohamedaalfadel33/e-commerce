'use client';
import React from 'react';
import { MdHome, MdHomeWork, MdProductionQuantityLimits } from 'react-icons/md';
import MobileNav from './MobileNav';
import NavItem from './NavItem';
import { FaPeopleGroup } from 'react-icons/fa6';
import { BsBorderWidth } from 'react-icons/bs';
import { CiBoxList } from 'react-icons/ci';
export default function Navbar() {
  return (
    <>
      <div className="md:flex hidden  flex-col">
        <div className="flex-center gap-2 mb-4 mt-2">
          <MdHomeWork size="1.5em" />
          <h1>E-Commerce Admin</h1>
        </div>
        <nav>
          <NavItem
            text="Dashboard"
            icon={<MdHome size="3em" />}
            href="/dashboard"
          />
          <NavItem
            text="Products"
            icon={<MdProductionQuantityLimits size="3em" />}
            href="/products"
          />
          <NavItem
            text="Categories"
            icon={<CiBoxList size="3em" />}
            href="/categories"
          />
          <NavItem
            text="Orders"
            icon={<BsBorderWidth size="3em" />}
            href="/orders"
          />
          <NavItem
            text="Admins"
            icon={<FaPeopleGroup size="3em" />}
            href="/admins"
          />
        </nav>
      </div>
      {/* MOBILE NAV */}
      <div>
        <nav className="flex items-center ">
          <MobileNav />
        </nav>
      </div>
    </>
  );
}

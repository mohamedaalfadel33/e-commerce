import React from 'react';
import { MdHome, MdHomeWork } from 'react-icons/md';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { CiBoxList } from 'react-icons/ci';
import { BsBorderWidth } from 'react-icons/bs';
import { FaPeopleGroup } from 'react-icons/fa6';
import { Button } from '../ui/button';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import NavItem from './NavItem';
import { SignedIn, UserButton } from '@clerk/nextjs';

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className=" align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            height={24}
            width={24}
            className=" cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className="flex flex-col gap-4 bg-slate-200 md:hidden"
        >
          <div className="flex-center ">
            <MdHomeWork size="1.5em" />
            <h2 className="font">E-Commerce Admin</h2>
          </div>
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
            href="/products"
          />
          <NavItem
            text="Orders"
            icon={<BsBorderWidth size="3em" />}
            href="/products"
          />
          <NavItem
            text="Admins"
            icon={<FaPeopleGroup size="3em" />}
            href="/products"
          />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

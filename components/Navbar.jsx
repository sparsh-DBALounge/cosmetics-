'use client';

import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';
import NavbarDrawer from './drawers/NavbarDrawer';
import Logo from './Logo';
import Categories from './Categories';

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <div className='bg-gray-50 h-[60px] py-2 px-5 lg:px-10 flex items-center justify-between'>
        <Menu
          onClick={() => setOpenNavbar(true)}
          className='block md:hidden cursor-pointer'
        />

        {/* Logo */}
        <Logo />

        {/* Categories */}
        <div className='hidden md:flex ml-[60px]'>
          <Categories />
        </div>

        {/* Icons */}
        <div className='flex items-center gap-4 sm:gap-7'>
          <Search size={20} />
          <Heart size={20} />
          <User size={20} className='hidden md:block' />
          <ShoppingBag size={20} />
        </div>
      </div>

      <div className='pt-3 border-t flex md:hidden justify-center'>
        <Categories />
      </div>

      {openNavbar && (
        <NavbarDrawer openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      )}
    </>
  );
};

export default Navbar;

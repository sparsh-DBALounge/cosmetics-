import { useState } from 'react';
import { Drawer } from 'antd';
import Logo from '../Logo';
import Categories from '../Categories';

const NavbarDrawer = ({ openNavbar, setOpenNavbar }) => {
  const [open, setOpen] = useState(openNavbar);

  const onClose = () => {
    setOpen(false);
    setOpenNavbar(false);
  };

  return (
    <>
      <Drawer
        onClose={onClose}
        open={open}
        width={400}
        placement='left'
        closable={false}
      >
        <div className='text-lg flex flex-col items-center'>
          <Logo />
        </div>

        <Categories view={'drawer'} />
      </Drawer>
    </>
  );
};
export default NavbarDrawer;

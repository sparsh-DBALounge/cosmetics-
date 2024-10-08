import { useState } from 'react';
import { Drawer } from 'antd';

const FilterDrawer = ({ openFilterDrawer, setOpenFilterDrawer }) => {
  const [open, setOpen] = useState(openFilterDrawer);

  const onClose = () => {
    setOpen(false);
    setOpenFilterDrawer(false);
  };

  return (
    <>
      <Drawer onClose={onClose} open={open} width={400} closable={false}>
        <div className='text-lg flex flex-col items-center'>
          <p>Filter Options</p>
        </div>
      </Drawer>
    </>
  );
};
export default FilterDrawer;

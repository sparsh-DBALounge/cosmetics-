'use client';

import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import FilterDrawer from '@/components/drawers/FilterDrawer';
import ProductCard from '@/components/ProductCard';

export default function CategoryItems({ params }) {
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  return (
    <>
      <div className='p-2 flex flex-col gap-4'>
        {/* Filter */}
        <div
          onClick={() => setOpenFilterDrawer(true)}
          className='flex items-center gap-2 cursor-pointer'
        >
          <SlidersHorizontal size={20} className='block md:hidden mt-3' />
          <p className='text-sm mt-[10px] roboto-regular tracking-wider'>
            Filters
          </p>
        </div>

        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
          {/* Map products and display */}
          <ProductCard name={'Gold Lift Expert Eye Cream 15ml'} price={559} />
          <ProductCard
            name={'Egyptian Miracle Face, Body And Hair Rescue'}
            price={796}
          />
          <ProductCard
            name={'Bio Hyaluron 3X Retinol System Roll-On 15ml'}
            price={716}
          />
        </div>
      </div>

      {openFilterDrawer && (
        <FilterDrawer
          openFilterDrawer={openFilterDrawer}
          setOpenFilterDrawer={setOpenFilterDrawer}
        />
      )}
    </>
  );
}

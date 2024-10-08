import placeholder from '@/public/placeholder.png';
import Image from 'next/image';

const ProductCard = ({ img, name, price }) => {
  return (
    <div className='relative p-2 flex flex-col items-center h-[260px]'>
      <Image src={placeholder} alt='product-image' width={100} height={100} />

      <div className='mt-2 flex flex-col gap-1 flex-wrap items-center'>
        <p className='text-center tracking-wide'>{name}</p>
        <p>${price}</p>
      </div>

      <button className='absolute bottom-2 bg-black text-white w-full lg:w-1/2 self-center p-2 hover:bg-[#33333385] transition-all duration-200 ease-in-out'>
        Add To Bag
      </button>
    </div>
  );
};

export default ProductCard;

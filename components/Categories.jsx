import { ArrowRight, User } from 'lucide-react';

const Categories = ({ view }) => {
  return (
    <div
      className={`${
        view === 'drawer' ? 'flex-col mt-10 text-lg' : 'gap-5'
      } text-sm flex items-center tracking-wider roboto-medium`}
    >
      {view === 'drawer' && (
        <User className='self-start cursor-pointer ml-2' size={30} />
      )}

      {/* New Arrivals */}
      <div
        className={`cursor-pointer category-${
          view === 'drawer' ? 'drawer flex justify-between mt-5' : ''
        }`}
      >
        <p>New Arrivals</p>
        {view === 'drawer' && <ArrowRight />}
      </div>

      {/* Makeup */}
      <div
        className={`cursor-pointer category-${
          view === 'drawer' ? 'drawer flex justify-between' : ''
        }`}
      >
        <p>Makeup</p>
        {view === 'drawer' && <ArrowRight />}
      </div>

      {/* Hair Care */}
      <div
        className={`cursor-pointer category-${
          view === 'drawer' ? 'drawer flex justify-between' : ''
        }`}
      >
        <p>Hair Care</p>
        {view === 'drawer' && <ArrowRight />}
      </div>

      {/* Skin Care */}
      <div
        className={`cursor-pointer category-${
          view === 'drawer' ? 'drawer flex justify-between' : ''
        }`}
      >
        <p>Skin Care</p>
        {view === 'drawer' && <ArrowRight />}
      </div>

      {/* Fragrance */}
      <div
        className={`cursor-pointer category-${
          view === 'drawer' ? 'drawer flex justify-between' : ''
        }`}
      >
        <p>Fragrance</p>
        {view === 'drawer' && <ArrowRight />}
      </div>
    </div>
  );
};

export default Categories;

import FilterSidebar from '@/components/FilterSidebar';

export default function CategoryItemsDisplayLayout({ children }) {
  return (
    <div className='flex-1'>
      <div className='flex h-full'>
        <div className='w-[270px] border-r p-2 hidden md:block'>
          <FilterSidebar />
        </div>

        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
}

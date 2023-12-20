import {categoriesData} from '@/data'
import Link from 'next/link';
const CategoriesList = () => {
  return (
    <div className='flex gap-2 text-sm flex-wrap'>
      {
        categoriesData && categoriesData.map((category, idx) => (
          <Link key={idx}
          href={`/categories/${category.name}`}
          className='px-4 py-1 rounded-md bg-slate-800 text-white'
          >{category.name}</Link>
        ))
      }
    </div>
  );
};

export default CategoriesList;
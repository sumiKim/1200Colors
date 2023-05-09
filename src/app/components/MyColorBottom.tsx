'use client';

import { useSelectedColor } from '../context/SelectedColorContext';
import ChipMobile from './ChipMobile';

export default function MyColorBottom() {
  const { selectedList } = useSelectedColor();

  console.log(`${selectedList.length == 0 ? 'o' : 'x'}`);

  return (
    <div className='block lg:hidden fixed bottom-0 w-full h-fit'>
      <div className='h-9 rounded-t-3xl pl-8 font-bold text-lg bg-white out_gradient flex items-center'>
        My Color
      </div>
      {selectedList.length == 0 && <div className='h-52 bg-black'>hi</div>}
      <ul className='flex w-full overflow-auto border-t-2 bg-white'>
        {selectedList.map(color => (
          <li key={color.id}>
            <ChipMobile color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import { useSelectedColor } from '../context/SelectedColorContext';
import ChipSimple from './ui/colorchips/ChipSimple';

export default function MyColorLeft() {
  const { selectedList } = useSelectedColor();

  return (
    <aside className='hidden lg:block fixed bottom-0 w-56 h-full border-r-2'>
      <ul className='flex flex-col-reverse items-end h-full overflow-auto'>
        {selectedList.map(color => (
          <li className='w-full' key={color.samwha_code}>
            <ChipSimple color={color} type={'web'} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

'use client';

import { useSelectedColor } from '../context/SelectedColorContext';
import ChipLong from './ChipLong';

// mt-[185px]
// ul flex-col-reverse로 바꿔야할듯,,,

export default function MyColorLeft() {
  const { selectedList } = useSelectedColor();

  return (
    <aside className='hidden lg:block fixed bottom-0 w-56 h-full border-r-2'>
      <ul className='flex flex-col-reverse items-end h-full overflow-auto'>
        {selectedList.map(color => (
          <li className='w-full' key={color.samwha_code}>
            <ChipLong color={color} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

'use client';
import { useState } from 'react';
import { useSelectedColor } from '../context/SelectedColorContext';
import ChipSimple from './ui/colorchips/ChipSimple';

export default function MyColorBottom() {
  const { selectedList } = useSelectedColor();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='block lg:hidden fixed bottom-0 w-full h-fit px-1 z-20'>
      <div
        className='h-9 rounded-t-3xl pl-8 font-bold text-lg bg-white out_gradient flex items-center'
        onClick={handleClick}
      >
        My Color
      </div>
      {selectedList.length == 0 && (
        <div className={`h-52 bg-white ${open ? 'block' : 'hidden'}`}></div>
      )}
      {open && (
        <ul className='flex w-full overflow-auto border-t-2 bg-white ps-1 gap-x-1'>
          {selectedList.map(color => (
            <li key={color.samwha_code}>
              <ChipSimple color={color} type={'mobile'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { useSelectedColor } from '../context/SelectedColorContext';
import DivideIcon from './ui/icons/DivideIcon';
import HomeIcon from './ui/icons/HomeIcon';
import { Color } from '@/service/type';
import Button from './ui/Button';

type Props = {
  color?: Color;
  title: string;
  subtitle: string;
};
export default function DetailHeader({ color, title, subtitle }: Props) {
  const { selectedList, removeColor, insertColor } = useSelectedColor();

  const state =
    selectedList.find(select => select.samwha_code === color?.samwha_code) ===
    undefined
      ? false
      : true;

  const [selected, setSelected] = useState(state);

  const handleBookmarkClick = () => {
    if (!color) return;

    if (selected) {
      removeColor(color);
    } else {
      insertColor(color);
    }
    setSelected(!selected);
  };

  return (
    <div className='flex flex-col py-2'>
      {/* <h1 className='text-2xl font-bold py-2'>{title}</h1> */}
      <div className='flex h-10 justify-between'>
        <div className='flex h-10 items-center text-samwha_textgray'>
          <HomeIcon />
          <DivideIcon />
          <span>{title}</span>
          <DivideIcon />
          <span className='text-black'>{subtitle}</span>
        </div>

        {color && (
          <div className='flex gap-1'>
            <Button icon={'pdf'} />
            <Button
              icon={'bookmark'}
              selected={selected}
              handleClick={handleBookmarkClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

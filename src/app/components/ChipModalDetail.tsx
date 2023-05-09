'use client';

import { useSelectedColor } from '@/app/context/SelectedColorContext';
import { Color } from '@/service/1200colors';
import { useEffect, useState } from 'react';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';

type Props = {
  color: Color;
};
export default function ChipModalDetail({ color }: Props) {
  const { selectedList, removeColor, insertColor } = useSelectedColor();
  const state =
    selectedList.find(select => select.samwha_code === color.samwha_code) ===
    undefined
      ? false
      : true;

  const [selected, setSelected] = useState(state);
  const handleBookmarkClick = () => {
    if (selected) {
      removeColor(color);
    } else {
      insertColor(color);
    }
    setSelected(!selected);
  };
  const handleMoreClick = () => {
    window.location.href = `/colorDetail/${color.samwha_code}`;
  };

  useEffect(() => {
    const color__value = `#${color.HEX}`;

    const divElement = document.getElementById(
      `chipmodal_${color.samwha_code}`
    )! as HTMLDivElement;
    divElement.style.backgroundColor = color__value;
  }, [color]);

  return (
    <section className='w-80 h-96 bg-white rounded-lg flex flex-col'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div
          id={`chipmodal_${color.samwha_code}`}
          className='w-72 h-72 m-3 rounded-lg'
        />
        <div className='flex w-72 justify-between'>
          <div>
            <p className='text-lg font-bold'>SH {color.samwha_code}</p>
            <p className='text-samwha_textgray'>{`${color.HVC_H} ${color.HVC_V}  /  ${color.HVC_C}`}</p>
          </div>
          <div className='flex flex-col items-end'>
            <button
              className='hover:scale-110 duration-200 mt-1'
              onClick={handleBookmarkClick}
            >
              {selected ? <BookmarkFillIcon /> : <BookmarkIcon />}
            </button>
            <button
              className='text-samwha_textgray hover:text-black mt-1'
              onClick={handleMoreClick}
            >
              more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

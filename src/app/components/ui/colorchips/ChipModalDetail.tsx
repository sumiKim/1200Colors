'use client';

import { useSelectedColor } from '@/app/context/SelectedColorContext';
import { useState } from 'react';
import ColorInfo from '../../ColorInfo';
import BookmarkFillIcon from '../icons/BookmarkFillIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import { Color } from '@/service/type';

type Props = {
  color: Color;
  style?: 'simple' | 'detail';
};

export default function ChipModalDetail({ color, style }: Props) {
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

  return (
    <section
      className={`${
        style === 'simple'
          ? 'w-80 h-96'
          : 'w-72 h-[500px] lg:w-[550px] lg:h-[600px]'
      } bg-white rounded-lg flex flex-col`}
    >
      <div className='w-full h-full px-3 flex flex-col justify-center items-center'>
        <div
          id={`chipmodal_${color.samwha_code}`}
          className={`rounded-lg m-3 ${
            style === 'simple' ? 'w-72 h-72' : ' w-full h-full'
          }`}
          style={{ backgroundColor: `#${color.HEX}` }}
        />
        <div
          className={`${
            style === 'simple'
              ? 'flex w-72 justify-between'
              : 'flex w-full justify-between lg:px-3 pb-3 lg:justify-center'
          }`}
        >
          {style === 'simple' && <ColorInfo color={color} type={'simple'} />}
          {style === 'detail' && <ColorInfo color={color} type={'popup'} />}
          {style === 'simple' && (
            <div className='flex flex-col items-end'>
              <button
                className='hover:scale-110 duration-200 mt-1'
                onClick={handleBookmarkClick}
              >
                {selected ? <BookmarkFillIcon /> : <BookmarkIcon />}
              </button>
              <button
                className='text-samwha_lightgray hover:text-black mt-1'
                onClick={handleMoreClick}
              >
                more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import { IPlaceNav } from './PlaceNav';
import ArrowForwardIcon from './ui/icons/ArrowForwardIcon';

type Props = {
  item: IPlaceNav;
  useType?: string;
};
export default function PlaceNavItem({ item, useType }: Props) {
  const { id, type, side, form, data } = item;
  const [open, setOpen] = useState(false);

  const sideStyle = 'ps-4 bg-[#666666] font-bold text-lg text-white';
  const formStyle = 'ps-11 bg-[#AAAAAA] font-bold text-lg';
  const dataStyle =
    'justify-center border-b-2 text-lg hover:bg-[#333333] hover:text-white px-5';

  const onClickMobile = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div
        className={`flex items-center h-12 ${
          type === 'side' ? sideStyle : type === 'form' ? formStyle : dataStyle
        }`}
        onClick={onClickMobile}
      >
        {type === 'side' && side}
        {type === 'form' && form}
        {type === 'data' && useType === 'web' && (
          <div className='h-full flex items-center justify-between'>
            <></>
            {data}
            <ArrowForwardIcon />
          </div>
        )}
        {type === 'data' && useType === 'mobile' && (
          <div className='h-full flex items-center justify-between'>
            <></>
            {data}
            <ArrowForwardIcon />
          </div>
        )}
      </div>
      {type === 'data' && useType === 'mobile' && (
        <div
          className={`w-full h-96 bg-blue-500 ${open ? 'block' : 'hidden'}`}
        ></div>
      )}
    </div>
  );
}

'use client';

import { IPlaceNav, usePlaceNavContext } from '../context/PlaceNavContext';
import PlaceImgs from './PlaceImgs';
import ArrowForwardIcon from './ui/icons/ArrowForwardIcon';

type Props = {
  index: number;
  item: IPlaceNav;
  useType?: string;
};
export default function PlaceNavItem({ index, item, useType }: Props) {
  const { selectedIndex, selected, handleClick } = usePlaceNavContext();
  const { type, side, form, data } = item;

  const sideStyle = 'ps-4 bg-[#666666] font-bold text-lg text-white';
  const formStyle = 'ps-11 bg-[#AAAAAA] font-bold text-lg';
  const dataStyle =
    'border-b-2 text-lg hover:bg-[#333333] hover:text-white px-5 pl-24';
  return (
    <div
      onClick={() => {
        type === 'data' && handleClick(index);
      }}
    >
      <div
        className={`flex items-center h-12 ${
          type === 'side' ? sideStyle : type === 'form' ? formStyle : dataStyle
        } ${selected[index] ? 'bg-[#333333] text-white' : ''}`}
      >
        {type === 'side' && side}
        {type === 'form' && form}
        {type === 'data' && useType === 'web' && (
          <div className={`h-full flex justify-center items-center`}>
            {data}
            <ArrowForwardIcon />
          </div>
        )}
        {type === 'data' && useType === 'mobile' && (
          <div
            className={`h-full flex justify-center items-center  ${
              selected[index] ? 'bg-[#333333] text-white' : ''
            }`}
          >
            <></>
            {data}
            <ArrowForwardIcon />
          </div>
        )}
      </div>
      {/* 모바일에서 이미지 보이는 영역 */}
      {type === 'data' && useType === 'mobile' && selectedIndex === index && (
        <div
          className={`w-full h-fit py-3 bg-[#333333] ${
            selected[index] ? 'block' : 'hidden'
          }`}
        >
          <PlaceImgs />
        </div>
      )}
    </div>
  );
}

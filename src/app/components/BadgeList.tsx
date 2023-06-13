'use client';

import { SearchValue } from '@/service/search';
import { Dispatch, SetStateAction, useState } from 'react';
import Badge from './ui/Badge';

type Props = {
  reqSearch: Dispatch<SetStateAction<SearchValue>>;
};

export default function BadgeList({ reqSearch }: Props) {
  const badgeList = ['편안한', '자연의', '모던한', '격조있는'];
  const [isSelected, setIsSelected] = useState<boolean[]>([]);

  const initBadgeState = (index: number) => {
    const newArr = Array(badgeList.length).fill(false);

    if (index !== -1) {
      newArr[index] = true;
    }

    setIsSelected(newArr);
  };

  const handleClick = (index: number) => {
    initBadgeState(index);
    reqSearch({ searchType: 'adjective', searchKeyword: badgeList[index] });
  };

  return (
    // <div className='w-full overflow-x-scroll whitespace-nowrap'>
    <div className='w-full flex justify-center'>
      <ul className='flex gap-4'>
        {badgeList.map((badge, index) => (
          <li key={index}>
            <Badge
              index={index}
              name={badge}
              isSelected={isSelected[index]}
              handleClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

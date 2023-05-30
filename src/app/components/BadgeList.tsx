'use client';

import { useSearchBox } from '../context/SearchBoxContext';
import Badge from './ui/Badge';

export default function BadgeList() {
  const { badgeList, isSelected, handleClick } = useSearchBox();

  return (
    <div className='w-full md:w-fit overflow-x-scroll whitespace-nowrap'>
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

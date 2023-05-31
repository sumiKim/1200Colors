'use client';

import { placeNav } from '../place/page';
import PlaceNavItem from './PlaceNavItem';

export default function PlaceNav() {
  return (
    <ul>
      {placeNav.map((item, index) => (
        <li key={`web_${item.id}`}>
          <PlaceNavItem index={index} item={item} useType={'web'} />
        </li>
      ))}
    </ul>
  );
}

'use client';

import { Color } from '@/service/1200colors';

type Props = { color: Color };
export default function ColorSquare({ color }: Props) {
  return (
    <div
      id={`${color?.samwha_code}`}
      style={{ backgroundColor: `#${color?.HEX}` }}
      className='w-full h-96 md:h-full rounded-lg'
    ></div>
  );
}

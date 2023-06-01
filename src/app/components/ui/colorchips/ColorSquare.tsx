'use client';

import { Color } from '@/service/type';

type Props = { color: Color };
export default function ColorSquare({ color }: Props) {
  return (
    <div
      id={`${color?.samwha_code}`}
      style={{ backgroundColor: `#${color?.HEX}` }}
      className={`w-full h-96 md:h-full rounded-lg ${
        color.border !== null ? 'border-line' : ''
      }`}
    ></div>
  );
}

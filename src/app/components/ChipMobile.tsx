import { Color } from '@/service/1200colors';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ChipMobile({ color }: { color: Color }) {
  const { id, samwha_code, HEX, HVC_H, HVC_V, HVC_C } = color;

  useEffect(() => {
    // 색 배경
    const color__value = `#${color.HEX}`;

    const divElement = document.getElementById(
      `mobilechip_${color.samwha_code}`
    )! as HTMLDivElement;
    divElement.style.backgroundColor = color__value;
  }, [color]);

  return (
    <div className='px-1 h-52 flex flex-col justify-center'>
      <Link href={`/colorDetail/${id}`}>
        <div id={`mobilechip_${samwha_code}`} className='h-32 w-32' />
      </Link>
      <div className='bg-white p-2 flex flex-col'>
        <strong className='text-lg'>SH {samwha_code}</strong>
        <span className='text-md text-gray-400'>
          {HVC_H} {HVC_V}/{HVC_C}
        </span>
      </div>
    </div>
  );
}

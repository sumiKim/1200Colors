import { Color } from '@/service/1200colors';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ChipLong({ color }: { color: Color }) {
  const { samwha_code, HEX, HVC_H, HVC_V, HVC_C } = color;

  useEffect(() => {
    // 색 배경
    const color__value = `#${color.HEX}`;

    const divElement = document.getElementById(
      `longchip_${color.samwha_code}`
    )! as HTMLDivElement;
    divElement.style.backgroundColor = color__value;
  }, [color]);

  return (
    <>
      <Link href={`/colorDetail/${samwha_code}`}>
        <div id={`longchip_${samwha_code}`} className='h-36 bg-slate-500' />
      </Link>
      <div className='h-30 bg-white p-2 flex flex-col'>
        <strong className='text-lg'>SH {samwha_code}</strong>
        <span className='text-md text-gray-400'>
          {HVC_H} {HVC_V}/{HVC_C}
        </span>
      </div>
    </>
  );
}

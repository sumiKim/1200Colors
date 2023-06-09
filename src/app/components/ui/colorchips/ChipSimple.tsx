import Link from 'next/link';
import { Color } from '@/service/type';

type Prop = {
  color: Color;
  type: 'web' | 'mobile' | 'simple';
};

type InfoSytle = {
  div: string;
  samwha_id: string;
  munsell: string;
};

type Style = {
  id: string;
  wrap_style: string;
  div_style: string;
  info_style: InfoSytle;
};

const defulatInfoSytle = {
  div: '',
  samwha_id: '',
  munsell: '',
};

export default function ChipSimple({ color, type }: Prop) {
  console.log(color);
  const { samwha_code, HEX, HVC_H, HVC_V, HVC_C, border } = color;

  console.log(border);

  let style: Style = {
    id: '',
    wrap_style: '',
    div_style: '',
    info_style: defulatInfoSytle,
  };

  switch (type) {
    case 'web':
      style = {
        id: 'web',
        wrap_style: 'flex flex-col',
        div_style: 'w-full h-36',
        info_style: {
          div: 'flex flex-col p-2 bg-white',
          samwha_id: 'text-lg font-bold text-sh_text64',
          munsell: 'text-md text-sh_text126',
        },
      };
      break;
    case 'mobile':
      style = {
        id: 'mobile',
        wrap_style: 'flex flex-col',
        div_style: 'w-32 h-32',
        info_style: {
          div: 'flex flex-col p-2 bg-white',
          samwha_id: 'text-lg font-bold text-sh_text64',
          munsell: 'text-md text-sh_text126',
        },
      };
      break;
    case 'simple':
      style = {
        id: 'simple',
        wrap_style: 'flex flex-row h-10 bg-white',
        div_style: 'w-10 h-10',
        info_style: {
          div: 'flex flex-col ms-2 justify-center',
          samwha_id: 'text-md font-semibold text-sh_text64',
          munsell: 'text-xs md:text-sm text-sh_text126',
        },
      };
      break;
  }

  return (
    <div className={`${style.wrap_style}`}>
      <Link href={`/colorDetail/${samwha_code}`}>
        <div
          id={`${style.id}chip_${samwha_code}`}
          className={`${style.div_style} ${
            color.border !== null ? 'border-line' : ''
          }`}
          style={{ backgroundColor: `#${HEX}` }}
        />
      </Link>
      <div className={`${style.info_style.div}`}>
        <p className={`${style.info_style.samwha_id}`}>SH {samwha_code}</p>
        <p className={`${style.info_style.munsell}`}>
          {HVC_H} {HVC_V}/{HVC_C}
        </p>
      </div>
    </div>
  );
}

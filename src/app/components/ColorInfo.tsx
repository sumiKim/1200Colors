import { Color } from '@/service/type';

type Props = {
  color: Color;
  type: 'color' | 'schema' | 'simple' | 'popup';
  description?: string;
};

export default function ColorInfo({ color, type, description }: Props) {
  const colorFont = {
    samwha: 'text-3xl font-semibold me-5 ',
    munsell: 'text-lg text-sh_text89',
    align: 'flex items-center',
    code_name1: 'w-20 font-medium text-sh_text64',
    code_name2: 'w-20 font-medium text-sh_text64',
    code_value: 'text-md text-sh_text126',
  };

  const schemaFont = {
    samwha: 'text-2xl font-semibold me-5 ',
    munsell: 'text-md text-sh_text89',
    align: 'flex items-center',
    code_name1: 'w-14 text-md font-medium text-sh_text64',
    code_name2: 'w-[70px] text-md font-medium text-sh_text64',
    code_value: 'text-sm text-sh_text126 ms-1',
  };

  const popupFont = {
    samwha: 'text-2xl font-semibold lg:me-5 ',
    munsell: 'text-md text-sh_text89',
    align: 'flex items-center justify-between lg:justify-normal',
    code_name1: 'w-16 text-md font-medium text-sh_text64',
    code_name2: '',
    code_value: 'text-sm text-sh_text126 ms-1',
  };

  const font =
    type === 'color' ? colorFont : type === 'popup' ? popupFont : schemaFont;

  let infoStyle = '';
  switch (type) {
    case 'color':
      infoStyle = 'flex flex-col';
      break;
    case 'popup':
      infoStyle = 'flex flex-col lg:flex-row';
      break;
    default:
      infoStyle = 'flex flex-col lg:flex-row';
      break;
  }
  return (
    <div className='grow'>
      <div
        className={
          type === 'schema' || type === 'popup'
            ? 'flex flex-row items-end w-full justify-between lg:justify-normal'
            : 'flex flex-col'
        }
      >
        {description && (
          <div className=' text-sm text-sh_text126'>{description}</div>
        )}
        <div className={`${font.samwha}`}>SH {`${color?.samwha_code}`}</div>
        <div
          className={`${font.munsell}`}
        >{`${color.HVC_H} ${color.HVC_V}/${color.HVC_C}`}</div>
      </div>
      <section
        className={`w-full ${
          type === 'color' ? 'flex text-left mt-3' : 'flex'
        }`}
      >
        {type !== 'simple' && (
          <div className={`w-full ${infoStyle}`}>
            <div className='basis-1/3'>
              <div className={`${font.align}`}>
                <div className={`${font.code_name1}`}>L*a*b*</div>
                <div
                  className={`${font.code_value}`}
                >{`${color?.['L*']} / ${color?.['a*']} / ${color?.['b*']}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name1}`}>RGB</div>
                <div
                  className={`${font.code_value}`}
                >{`${color.R} / ${color.G} / ${color.B}`}</div>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className={`${font.align}`}>
                <div className={`${font.code_name1}`}>CMYK</div>
                <div
                  className={`${font.code_value}`}
                >{`${color.C} / ${color.M} / ${color.Y} / ${color.K}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name1}`}>HEX</div>
                <div className={`${font.code_value}`}>{`#${color.HEX}`}</div>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className={`${font.align}`}>
                <div className={`${font.code_name2}`}>NCS</div>
                <div className={`${font.code_value}`}>{`${color.NCS}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name2}`}>Pantone</div>
                <div className={`${font.code_value}`}>{`${color.Pantone}`}</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

import { Color } from '@/service/1200colors';
type Props = {
  color: Color;
  type: 'color' | 'schema' | 'simple' | 'popup';
};

export default function ColorInfo({ color, type }: Props) {
  const colorFont = {
    samwha: 'text-3xl font-semibold me-5',
    munsell: 'text-lg text-samwha_textgray',
    align: 'flex items-center',
    code_name: 'w-20 font-medium text-samwha_textdarkgray',
    code_value: 'text-md text-samwha_textgray',
  };

  const schemaFont = {
    samwha: 'text-2xl font-semibold me-5',
    munsell: 'text-md text-samwha_textgray',
    align: 'flex items-center',
    code_name: 'w-16 text-md font-medium text-samwha_textdarkgray',
    code_value: 'text-sm text-samwha_textgray ms-1',
  };

  const popupFont = {
    samwha: 'text-2xl font-semibold lg:me-5',
    munsell: 'text-md text-samwha_textgray',
    align: 'flex items-center justify-between lg:justify-normal',
    code_name: 'w-16 text-md font-medium text-samwha_textdarkgray',
    code_value: 'text-sm text-samwha_textgray ms-1',
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
    // <div className='w-full ms-5 lg:m-0'>
    <div className='w-full'>
      <div
        className={
          type === 'schema' || type === 'popup'
            ? 'flex flex-row items-end w-full justify-between lg:justify-normal mb-1'
            : 'flex flex-col'
        }
      >
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
                <div className={`${font.code_name}`}>L*a*b*</div>
                <div
                  className={`${font.code_value}`}
                >{`${color?.['L*']} / ${color?.['a*']} / ${color?.['b*']}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name}`}>RGB</div>
                <div
                  className={`${font.code_value}`}
                >{`${color.R} / ${color.G} / ${color.B}`}</div>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className={`${font.align}`}>
                <div className={`${font.code_name}`}>CMYK</div>
                <div
                  className={`${font.code_value}`}
                >{`${color.C} / ${color.M} / ${color.Y} / ${color.K}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name}`}>HEX</div>
                <div className={`${font.code_value}`}>{`#${color.HEX}`}</div>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className={`${font.align}`}>
                <div className={`${font.code_name}`}>NCS</div>
                <div className={`${font.code_value}`}>{`${color.NCS}`}</div>
              </div>
              <div className={`${font.align}`}>
                <div className={`${font.code_name}`}>Pantone</div>
                <div className={`${font.code_value}`}>{`${color.Pantone}`}</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

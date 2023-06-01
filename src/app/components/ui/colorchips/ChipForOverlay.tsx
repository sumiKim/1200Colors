import { useCustomPlaceContext } from '@/app/context/CustomPlaceContext';
import { useCustomSchema } from '@/app/context/CustomSchemaContext';
import { Color } from '@/service/type';

type Prop = {
  color: Color;
};
export default function ChipForOverlay({ color }: Prop) {
  const { target, changePlaceColor, requestAPI } = useCustomPlaceContext();
  const { changeColor, changeArea } = useCustomSchema();

  const { samwha_code, HEX, HVC_H, HVC_V, HVC_C } = color;

  const handleClick = () => {
    if (changeArea !== undefined) changeColor(changeArea, color);
    if (target !== '') {
      const newArr = changePlaceColor(Number(target), color);
      // 통신하기 ?
      requestAPI(newArr);
    }
  };

  return (
    <div
      className='flex flex-row w-full bg-white hover:bg-gray-200 p-1 mt-1 gap-1'
      onClick={handleClick}
    >
      <div
        id={`overlay_myColorchip_${samwha_code}`}
        className={`basis-1/2 h-10 ${
          color.border !== null ? 'border-line' : ''
        }`}
        style={{ backgroundColor: `#${HEX}` }}
      />
      <div
        className={
          'flex flex-col lg:flex-row ms-2 lg:items-center justify-center lg:gap-1'
        }
      >
        <p className={'text-md font-semibold text-sh_text64'}>
          SH {samwha_code}
        </p>
        <p className={'text-xs md:text-sm text-sh_text126'}>
          {HVC_H} {HVC_V}/{HVC_C}
        </p>
      </div>
    </div>
  );
}

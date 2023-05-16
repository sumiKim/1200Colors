import ColorInfo from '../../ColorInfo';
import { Color } from '@/service/type';

type Props = {
  color: Color;
};

export default function ChipSchemaDetail({ color }: Props) {
  return (
    <div className='flex flex-col lg:flex-row gap-2'>
      {/* <div
        className='w-full lg:w-20 h-20 me-3'
        style={{ backgroundColor: `#${color.HEX}` }}
      /> */}
      <div className='w-20 h-20' style={{ backgroundColor: `#${color.HEX}` }} />
      <ColorInfo color={color} type={'schema'} />
    </div>
  );
}

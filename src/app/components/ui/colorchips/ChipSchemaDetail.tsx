import ColorInfo from '../../ColorInfo';
import { Color } from '@/service/type';

type Props = {
  color: Color;
};

export default function ChipSchemaDetail({ color }: Props) {
  return (
    <div className={`flex flex-col lg:flex-row gap-4`}>
      <div
        className={`w-20 h-20 ${color.border !== null ? 'border-line' : ''}`}
        style={{ backgroundColor: `#${color.HEX}` }}
      />
      <ColorInfo color={color} type={'schema'} />
    </div>
  );
}

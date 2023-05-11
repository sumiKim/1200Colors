import { ColorSchema } from '@/service/1200colorschemas';
import Link from 'next/link';
type Props = {
  schema: ColorSchema;
  size: 'medium' | 'large';
};

export default function ColorSchemaSquare({ schema, size }: Props) {
  return (
    <Link href={`/schemaDetail/${schema.id}`}>
      <div
        className={`${
          size === 'medium' ? 'w-44 h-44' : 'w-72 h-72 md:w-96 md:h-96'
        }  rounded-md overflow-hidden`}
      >
        <div
          id='base'
          className={`w-full h-[55%]`}
          style={{ backgroundColor: `#${schema.base.HEX}` }}
        ></div>
        <div
          id='accent'
          className='w-full h-[15%]'
          style={{ backgroundColor: `#${schema.accent.HEX}` }}
        ></div>
        <div
          id='secondary'
          className='w-full h-[30%]'
          style={{ backgroundColor: `#${schema.secondary.HEX}` }}
        ></div>
      </div>
    </Link>
  );
}

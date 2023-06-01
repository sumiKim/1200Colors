import { Schema } from '@/service/type';
import Link from 'next/link';

type Props = {
  schema: Schema;
  size: 'medium' | 'large';
};

export default function ColorSchemaSquare({ schema, size }: Props) {
  const border = borderCheck(schema);

  return (
    <Link href={`/schemaDetail/${schema.id}`}>
      <div
        className={`${
          size === 'medium'
            ? ' w-40 h-40 md:w-44 md:h-44'
            : 'w-72 h-72 md:w-80 md:h-80 '
        } rounded-md overflow-hidden ${border ? 'border-line' : ''}`}
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

function borderCheck(schema: Schema): Boolean {
  let borderCheck: boolean;

  schema.base.border === null &&
  schema.accent.border === null &&
  schema.secondary.border === null
    ? (borderCheck = false)
    : (borderCheck = true);

  return borderCheck;
}

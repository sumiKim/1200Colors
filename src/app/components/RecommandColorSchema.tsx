'use client';

import { Color } from '@/service/type';
import { ColorSchema } from '@/service/type';
import useSWR from 'swr';
import ChipSimple from './ui/colorchips/ChipSimple';
import ColorSchemaSquare from './ui/colorchips/ColorSchemaSquare';

type Props = { color: Color };

export default function RecommandColorSchema({ color }: Props) {
  const {
    data: colorschema,
    isLoading,
    error,
  } = useSWR<ColorSchema>(`/api/recommand_colorschema/${color.samwha_code}`);

  console.log(colorschema);

  return (
    <div className=' mt-10'>
      <span className='text-lg font-medium'>추천배색</span>
      <div className='flex mt-2'>
        {colorschema && (
          <ColorSchemaSquare schema={colorschema} size={'medium'} />
        )}

        <div className='grow ps-5 flex flex-col justify-end gap-2'>
          {colorschema && (
            <ChipSimple color={colorschema.base} type={'simple'} />
          )}
          {colorschema && (
            <ChipSimple color={colorschema.accent} type={'simple'} />
          )}
          {colorschema && (
            <ChipSimple color={colorschema.secondary} type={'simple'} />
          )}
        </div>
      </div>
    </div>
  );
}

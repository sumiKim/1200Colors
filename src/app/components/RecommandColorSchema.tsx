'use client';

import useSWR from 'swr';
import { config } from '../util/config';
import ChipSimple from './ui/colorchips/ChipSimple';
import ColorSchemaSquare from './ui/colorchips/ColorSchemaSquare';
import { Color, ResSchemas } from '@/service/type';

type Props = { color: Color };

export default function RecommandColorSchema({ color }: Props) {
  const {
    data: result,
    isLoading,
    error,
  } = useSWR<ResSchemas>(
    `${config.server.baseURL}/schema?type=samhwa&code=${color.samwha_code}`
  );

  return (
    <div className=' mt-10'>
      <span className='text-lg font-medium'>추천배색</span>
      <div className='flex mt-2'>
        {result && result.status && (
          <ColorSchemaSquare
            schema={result.result[0].resColor[0]}
            size={'medium'}
          />
        )}

        <div className='grow ps-5 flex flex-col justify-end gap-2'>
          {result && result.status && (
            <ChipSimple
              color={result.result[0].resColor[0].base}
              type={'simple'}
            />
          )}
          {result && result.status && (
            <ChipSimple
              color={result.result[0].resColor[0].accent}
              type={'simple'}
            />
          )}
          {result && result.status && (
            <ChipSimple
              color={result.result[0].resColor[0].secondary}
              type={'simple'}
            />
          )}
        </div>
      </div>
    </div>
  );
}

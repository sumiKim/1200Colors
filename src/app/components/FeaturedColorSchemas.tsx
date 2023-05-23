'use client';

import useSWR from 'swr';
import { ColorSchema } from '@/service/type';
import ColorSchemaSquare from './ui/colorchips/ColorSchemaSquare';
import { config } from '../util/config';

export default function FeaturedColorSchemas() {
  const {
    data: colorschemas,
    isLoading,
    error,
  } = useSWR<ColorSchema[]>(
    `${config.server.baseURL}/1200color/getAllColorScheme`
  );

  return (
    <section className='w-fit p-1 bg-white'>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center gap-2 p-2 w-fit '>
        {colorschemas?.map(schema => (
          <li key={schema.id}>
            <ColorSchemaSquare schema={schema} size={'medium'} />
          </li>
        ))}
      </ul>
    </section>
  );
}

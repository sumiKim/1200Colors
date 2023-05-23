'use client';
import { Color } from '@/service/type';
import useSWR from 'swr';
import ChipDefault from '../components/ui/colorchips/ChipDefault';
import { config } from '../util/config';

export default function ColorPage() {
  const {
    data: colors,
    isLoading,
    error,
  } = useSWR<Color[]>(`${config.server.baseURL}/1200color/getAllColor`);

  return (
    <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
      <div className='h-3/4 w-fit overflow-scroll'>
        <section className='w-fit p-1 bg-white'>
          <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit '>
            {colors &&
              colors.map(color => (
                <li key={color.samwha_code} data-value={color.id}>
                  <ChipDefault color={color} />
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

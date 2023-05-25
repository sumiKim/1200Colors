'use client';
import useSWR from 'swr';
import { config } from '../util/config';
import ChipDefault from '../components/ui/colorchips/ChipDefault';
import { ResColors } from '@/service/type';
import Error from '../components/ui/Error';

export default function ColorPage() {
  const { data, isLoading, error } = useSWR<ResColors>(
    `${config.server.baseURL}/color`
  );

  const colors = data?.result;

  return (
    <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
      <div className='h-3/4 w-fit overflow-scroll'>
        <section className='w-fit p-1 bg-white'>
          {error && <Error />}
          {colors && (
            <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit '>
              {colors.map(color => (
                <li key={color.samwha_code} data-value={color.id}>
                  <ChipDefault color={color} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

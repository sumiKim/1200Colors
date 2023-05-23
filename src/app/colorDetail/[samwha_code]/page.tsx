'use client';

import { Color } from '@/service/type';
import ColorInfo from '@/app/components/ColorInfo';
import DetailHeader from '@/app/components/DetailHeader';
import RecommandColorSchema from '@/app/components/RecommandColorSchema';
import NotFound from './not-found';
import ColorSquare from '@/app/components/ui/colorchips/ColorSquare';
import useSWR from 'swr';
import { config } from '../../util/config';

type Props = { params: { samwha_code: string } };

export default function ColorDetailPage({ params: { samwha_code } }: Props) {
  if (!samwha_code) {
    NotFound();
  }

  const { data, isLoading, error } = useSWR(
    `${config.server.baseURL}/1200color/getColorBySamwhaCode/${samwha_code}`
  );

  const color: Color = data?.[0];

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      {color && <DetailHeader color={color} title='컬러' subtitle='컬러정보' />}
      <div className='w-full flex flex-col md:items-stretch md:flex-row gap-5'>
        <div className='basis-1/2 w-full'>
          {color && <ColorSquare color={color} />}
        </div>
        <div className='flex flex-col sm:flex-row md:flex-col basis-1/2'>
          <div className='basis-1/2'>
            {color && <ColorInfo color={color} type={'color'} />}
          </div>
          <div>{color && <RecommandColorSchema color={color} />}</div>
        </div>
      </div>
    </section>
  );
}

'use client';
import DetailHeader from '@/app/components/DetailHeader';
import NotFound from './not-found';
import useSWR from 'swr';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import { ColorSchema } from '@/service/1200colorschemas';
import ChipCustom from '@/app/components/ui/colorchips/ChipCustom';

type Props = { params: { id: string } };

export default function CustomSchemapage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  // id로 배색의 상세정보 가져오기
  const {
    data: schema,
    isLoading,
    error,
  } = useSWR<ColorSchema>(`/api/schema_detail/${id}`);

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      <DetailHeader title='배색' subtitle='배색만들기' />
      <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-2'>
        <div className='basis-1/3'>
          {schema && <ColorSchemaSquare schema={schema} size={'large'} />}
        </div>
        <div className='basis-2/3 flex flex-col justify-end'>
          {schema && <ChipCustom color={schema.base} />}
          {schema && <ChipCustom color={schema.accent} />}
          {schema && <ChipCustom color={schema.secondary} />}
        </div>
      </div>
    </section>
  );
}

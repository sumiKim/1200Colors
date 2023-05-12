'use client';
import DetailHeader from '@/app/components/DetailHeader';
import NotFound from './not-found';
import useSWR from 'swr';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import ChipSchemaDetail from '@/app/components/ui/colorchips/ChipSchemaDetail';
import Button from '@/app/components/ui/Button';
import { ColorSchema } from '@/service/type';

type Props = { params: { id: string } };

export default function ColorDetailPage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  // id로 배색의 상세정보 가져오기
  const {
    data: schema,
    isLoading,
    error,
  } = useSWR<ColorSchema>(`/api/schema_detail/${id}`);

  const handleCustomColor = () => {
    window.location.href = `/customSchema/${id}`;
  };
  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      <DetailHeader title='배색' subtitle='배색정보' />
      <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-2'>
        <div className='basis-1/3'>
          {schema && <ColorSchemaSquare schema={schema} size={'large'} />}
        </div>
        <div className='basis-2/3 flex flex-col justify-between'>
          <div className='flex justify-end gap-1'>
            <Button icon='pdf' />
            <Button
              icon='swatch'
              description='Custom Color'
              handleClick={handleCustomColor}
            />
          </div>
          <div>
            {schema && <ChipSchemaDetail color={schema.base} />}
            {schema && <ChipSchemaDetail color={schema.accent} />}
            {schema && <ChipSchemaDetail color={schema.secondary} />}
          </div>
        </div>
      </div>
    </section>
  );
}

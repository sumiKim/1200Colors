'use client';
import useSWR from 'swr';
import { config } from '../../util/config';
import NotFound from './not-found';
import DetailHeader from '@/app/components/DetailHeader';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import ChipSchemaDetail from '@/app/components/ui/colorchips/ChipSchemaDetail';
import Button from '@/app/components/ui/Button';
import { ResSchemas, Schema } from '@/service/type';
import Error from '@/app/components/ui/Error';
import { makeSchemaPDF } from '@/service/pdf';

type Props = { params: { id: string } };

export default function ColorDetailPage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  const { data, isLoading, error } = useSWR<ResSchemas>(
    `${config.server.baseURL}/schema/${id}`
  );

  const schema: Schema = data?.result[0].resColor[0] as Schema;

  const handleCustomColor = () => {
    window.location.href = `/customSchema/${id}`;
  };

  const handlePDFClick = () => {
    makeSchemaPDF(schema, id);
  };

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      {error && <Error />}
      {schema && (
        <>
          <DetailHeader title='배색' subtitle='배색정보' />
          <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-4'>
            <div className='basis-1/3'>
              <ColorSchemaSquare schema={schema} size={'large'} />
            </div>
            <div className='basis-2/3 flex flex-col justify-between gap-3'>
              <div className='flex justify-end gap-1'>
                <Button icon='pdf' handleClick={handlePDFClick} />
                <Button
                  icon='swatch'
                  description='Custom Color'
                  handleClick={handleCustomColor}
                />
              </div>
              <div className='flex flex-col gap-4'>
                <ChipSchemaDetail color={schema.base} />
                <ChipSchemaDetail color={schema.accent} />
                <ChipSchemaDetail color={schema.secondary} />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

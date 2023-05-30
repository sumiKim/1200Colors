'use client';
import useSWR from 'swr';
import { config } from '../../util/config';
import { useEffect, useState } from 'react';
import NotFound from './not-found';
import DetailHeader from '@/app/components/DetailHeader';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import ChipCustom from '@/app/components/ui/colorchips/ChipCustom';
import ColorPaletteOverlay from '@/app/components/ColorPaletteOverlay';
import { SchemaArea, useCustomSchema } from '@/app/context/CustomSchemaContext';
import { ResSchema, Schema } from '@/service/type';
import Error from '@/app/components/ui/Error';

type Props = { params: { id: string } };

export default function CustomSchemapage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  const { data, isLoading, error } = useSWR<ResSchema>(
    `${config.server.baseURL}/schema/${id}`
  );

  const { schema, initColor, handleChangeArea } = useCustomSchema();

  if (data !== undefined) {
    const defaultSchema: Schema = data.result;
    initColor({ ...defaultSchema });
  }

  const [openEditArea, setOpenEditArea] = useState(false);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = e.currentTarget.value as SchemaArea;
    handleChangeArea(targetValue);
    setOpenEditArea(!openEditArea);
  };

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      {error && <Error />}
      {isLoading && <p>로딩중</p>}
      {data && (
        <>
          <DetailHeader title='배색' subtitle='배색만들기' />
          <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-2'>
            <div className='basis-1/3'>
              <ColorSchemaSquare schema={schema} size={'large'} />
            </div>
            <div className='basis-2/3 flex flex-col justify-end relative'>
              <ChipCustom
                area={'base'}
                color={schema.base}
                handleEdit={handleEdit}
              />
              <ChipCustom
                area={'accent'}
                color={schema.accent}
                handleEdit={handleEdit}
              />
              <ChipCustom
                area={'secondary'}
                color={schema.secondary}
                handleEdit={handleEdit}
              />
              <ColorPaletteOverlay
                openEditArea={openEditArea}
                handleClose={handleEdit}
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}

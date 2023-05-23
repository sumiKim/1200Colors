'use client';

import DetailHeader from '@/app/components/DetailHeader';
import NotFound from './not-found';
import useSWR from 'swr';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import ChipCustom from '@/app/components/ui/colorchips/ChipCustom';
import { useEffect, useState } from 'react';
import ColorPaletteOverlay from '@/app/components/ColorPaletteOverlay';
import { ColorSchema } from '@/service/type';
import { SchemaArea, useCustomSchema } from '@/app/context/CustomSchemaContext';
import { config } from '../../util/config';

type Props = { params: { id: string } };

export default function CustomSchemapage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  const { data, isLoading, error } = useSWR(
    `${config.server.baseURL}/1200color/getColorSchemeById/${id}`
  );

  const { schema, initColor, handleChangeArea } = useCustomSchema();

  const [openEditArea, setOpenEditArea] = useState(false);
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = e.currentTarget.value as SchemaArea;
    handleChangeArea(targetValue);
    setOpenEditArea(!openEditArea);
  };

  useEffect(() => {
    if (data !== undefined) {
      const defaultSchema: ColorSchema = data?.[0];
      initColor({ ...defaultSchema });
    }
  }, [data]);

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      <DetailHeader title='배색' subtitle='배색만들기' />
      <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-2'>
        <div className='basis-1/3'>
          {schema && <ColorSchemaSquare schema={schema} size={'large'} />}
        </div>
        <div className='basis-2/3 flex flex-col justify-end relative'>
          {schema && (
            <ChipCustom
              area={'base'}
              color={schema.base}
              handleEdit={handleEdit}
            />
          )}
          {schema && (
            <ChipCustom
              area={'accent'}
              color={schema.accent}
              handleEdit={handleEdit}
            />
          )}
          {schema && (
            <ChipCustom
              area={'secondary'}
              color={schema.secondary}
              handleEdit={handleEdit}
            />
          )}
          <ColorPaletteOverlay
            openEditArea={openEditArea}
            handleClose={handleEdit}
          />
        </div>
      </div>
    </section>
  );
}

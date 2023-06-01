'use client';
import ColorPaletteOverlay from '@/app/components/ColorPaletteOverlay';
import DetailHeader from '@/app/components/DetailHeader';
import ChipCustom from '@/app/components/ui/colorchips/ChipCustom';
import CustomPlaceProvider, {
  useCustomPlaceContext,
} from '@/app/context/CustomPlaceContext';
import { config } from '@/app/util/config';
import { Color } from '@/service/type';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type Props = { params: { id: string } };

type ResSpaceImg = {
  status: boolean;
  result: DataSpaceImg;
};

type DataSpaceImg = {
  base_img: string;
  shadow_imgs: string[];
  regions: AreaColor[];
};

export type AreaColor = {
  id: number;
  korean_letter: string;
  color: Color;
};

export default function PlaceDetailPage({ params: { id } }: Props) {
  const { infos, setInfos, initInfo, handleChangeArea, blendImg } =
    useCustomPlaceContext();

  const { data, isLoading, error } = useSWR<ResSpaceImg>(
    `${config.server.baseURL}/space/?image_id=${id}`
  );

  const spaceDetail = data?.result;
  const baseImg = spaceDetail?.base_img;
  const shadowImgs = spaceDetail?.shadow_imgs;
  const colorInfos = spaceDetail?.regions;

  const Imgs: string[] = [];

  if (baseImg !== undefined) {
    if (blendImg !== '') {
      Imgs.push(`data:image/png;base64,${blendImg}`);
    } else {
      Imgs.push(baseImg);
    }
  }

  shadowImgs?.map(i => Imgs.push(i));

  useEffect(() => {
    if (colorInfos) {
      initInfo(colorInfos, spaceDetail.base_img);
    }
  }, [colorInfos]);

  const imageLoader = ({ src }: { src: string }) => {
    return `${config.server.imgURL}${src}?q=1}`;
  };

  const [openEditArea, setOpenEditArea] = useState(false);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = e.currentTarget.value;
    handleChangeArea(targetValue);
    setOpenEditArea(!openEditArea);
    console.log(infos);
  };

  return (
    <div className='max-w-screen-xl mx-auto flex flex-col p-5'>
      <DetailHeader title='공간' subtitle='공간 시뮬레이션' />
      {spaceDetail && (
        <div className='mx-auto w-full flex flex-col md:flex-row gap-2'>
          <ul className='basis-1/2 aspect-square bg-slate-500 relative'>
            {Imgs &&
              Imgs.map((i, index) => (
                <li key={index}>
                  <Image
                    className='absolute top-0 left-0'
                    loader={imageLoader}
                    src={i}
                    alt={i}
                    fill={true}
                  />
                </li>
              ))}
          </ul>
          <ul className='basis-1/2 flex flex-col justify-start relative'>
            {infos && (
              <>
                {infos.map((colorInfo, index) => (
                  <li key={index}>
                    <ChipCustom
                      area={colorInfo.id}
                      area_name={colorInfo.korean_letter}
                      color={colorInfo.color}
                      handleEdit={handleEdit}
                    />
                  </li>
                ))}
                <ColorPaletteOverlay
                  openEditArea={openEditArea}
                  handleClose={handleEdit}
                />
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

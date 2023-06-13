'use client';
import { placeNav } from '@/data/place';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { usePlaceNavContext } from '../context/PlaceNavContext';
import { config } from '../util/config';

type ResSpace = {
  status: boolean;
  result: DataSpace[];
};

type DataSpace = {
  default_color: null;
  directory: string;
  id: number;
  image_id: number;
  is_base: number;
  is_origin: number;
  is_shadow: number;
  korean_letter: string;
  major: string;
  medium: string;
  png_name: string;
  region_count: number;
  thumbnail_url: string;
  url: string;
};

export default function PlaceImgs() {
  const { selectedIndex } = usePlaceNavContext();
  const placeName = placeNav[selectedIndex].param ?? '';
  const { data, isLoading, error } = useSWR<ResSpace>(
    placeName !== '' && `${config.server.baseURL}/space/${placeName}`
  );
  const spaceImgs = data?.result;

  const imageLoader = ({ src }: { src: string }) => {
    return `${config.server.imgURL}${src}?q=1}`;
  };

  return (
    <div className='w-full h-fit flex items-center justify-center'>
      <ul className='grid grid-cols-2 gap-4 md:gap-3'>
        {spaceImgs &&
          spaceImgs.map(img => (
            <li
              key={img.id}
              className='relative w-40 h-40 md:w-60 md:h-60 lg:w-48 lg:h-48 xl:w-56 xl:h-56'
            >
              <Link href={`/place/${img.image_id}`}>
                <Image
                  loader={imageLoader}
                  src={`${img.url}`}
                  alt={img.thumbnail_url}
                  fill={true}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

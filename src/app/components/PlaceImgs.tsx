'use client';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { usePlaceNavContext } from '../context/PlaceNavContext';
import { placeNav } from '../place/page';
import { config } from '../util/config';

type ResSpace = {
  status: boolean;
  result: DataSpace[];
};

type DataSpace = {
  default_color: null;
  directory: string;
  encoded_url: string;
  group_name: string;
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
      <ul className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3'>
        {spaceImgs &&
          spaceImgs.map(img => (
            <li
              key={img.id}
              className='relative w-60 h-60 lg:w-48 lg:h-48 xl:w-56 xl:h-56'
            >
              <Link href={`/place/${img.image_id}`}>
                <Image
                  loader={imageLoader}
                  src={`${img.url}`}
                  alt={img.directory}
                  fill={true}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

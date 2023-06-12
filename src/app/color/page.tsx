'use client';
import useSWR from 'swr';
import ChipDefault from '../components/ui/colorchips/ChipDefault';
import { ResColors } from '@/service/type';
import Error from '../components/ui/Error';
import { makeReqUrlForColor, useSearchBox } from '../context/SearchBoxContext';
import NoSearchResults from '../components/ui/NoSearchResults';
import { HiColorSwatch } from 'react-icons/hi';

export default function ColorPage() {
  const { searchType, searchKeyword } = useSearchBox();
  const reqUrl = makeReqUrlForColor(searchType, searchKeyword);
  const { data, isLoading, error } = useSWR<ResColors>(reqUrl !== '' && reqUrl);

  let colors = data?.result.resColor;

  return (
    <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
      <div className='h-3/4 w-fit overflow-scroll'>
        <section className='w-fit p-1 bg-white'>
          {error && <Error />}
          {(reqUrl === '' || colors?.length === 0) && (
            <NoSearchResults type={searchType} keyword={searchKeyword} />
          )}
          {colors && (
            <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit'>
              {colors.map(color => (
                <li key={color.samwha_code} data-value={color.id}>
                  <ChipDefault color={color} />
                </li>
              ))}
            </ul>
          )}
          {colors?.length === 1 && data?.result.nearbyColor !== undefined && (
            <>
              <div className='relative w-full border-b-2 mt-3 mb-2'>
                <p className='flex items-center pt-2 text-lg text-sh_text89 ps-2 gap-2'>
                  <HiColorSwatch />
                  <span>연관 색채</span>
                </p>
              </div>
              <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit'>
                {data?.result.nearbyColor.map(color => (
                  <li key={color.samwha_code} data-value={color.id}>
                    <ChipDefault color={color} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

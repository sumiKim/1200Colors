'use client';
import useSWR from 'swr';
import ColorSchemaSquare from '../components/ui/colorchips/ColorSchemaSquare';
import { ResSchema, ResSchemas, Schema } from '@/service/type';
import Error from '../components/ui/Error';
import NoSearchResults from '../components/ui/NoSearchResults';
import ArrowIcon from '../components/ui/icons/ArrowIcon';
import SearchBox from '../components/SearchBox';
import { colorSchemaMenu } from '@/data/searchBox';
import { useState } from 'react';
import { makeReqUrlForSchema, SearchValue } from '@/service/search';
import BadgeList from '../components/BadgeList';

export default function ColorSchemaPage() {
  const [searchColor, setSearchColor] = useState<SearchValue>({
    searchType: 'colorname',
    searchKeyword: '',
  });

  const reqUrl = makeReqUrlForSchema(
    searchColor.searchType,
    searchColor.searchKeyword
  );

  const { data, isLoading, error } = useSWR<ResSchemas>(
    reqUrl !== '' && reqUrl
  );

  const resultData: Array<ResSchema> = data?.result ?? [];

  let schemas: Array<Schema> = [];
  let space_in: Array<Schema> = [];
  let space_out: Array<Schema> = [];

  if (resultData?.length === 1) {
    const arr = resultData[0].resColor;
    schemas = [...arr];
  } else {
    resultData.map(data =>
      data.inout_desc === '내부'
        ? data.resColor.map(d => space_in.push(d))
        : data.resColor.map(d => space_out.push(d))
    );
  }

  return (
    <>
      <div className='relative z-30 w-full h-32 flex bg-white border-b-2'>
        <div className='hidden lg:block w-56 font-bold text-2xl text-right pt-6 pr-16'>
          배색
        </div>
        <div className='flex flex-col max-w-xs sm:max-w-md md:max-w-3xl lg:w-full mx-auto justify-center gap-3'>
          <SearchBox menu={colorSchemaMenu} reqSearch={setSearchColor} />
          <BadgeList reqSearch={setSearchColor} />
        </div>
      </div>
      <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
        <div className='h-3/4 w-fit overflow-scroll'>
          <section className='w-fit p-1 bg-white'>
            {error && <Error />}
            {reqUrl === '' && (
              <NoSearchResults
                type={searchColor.searchType}
                keyword={searchColor.searchKeyword}
              />
            )}
            {schemas.length !== 0 && (
              <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center gap-2 p-2 w-fit'>
                {schemas.map(schema => (
                  <li key={schema.id}>
                    <ColorSchemaSquare schema={schema} size={'medium'} />
                  </li>
                ))}
              </ul>
            )}
            {space_in.length !== 0 && (
              <div className='mt-3 mb-2'>
                <p className='flex text-md font-semibold px-2 py-2 gap-1 items-center'>
                  <ArrowIcon />
                  내부
                </p>
                <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center gap-2 p-2 w-fit'>
                  {space_in.map(schema => (
                    <li key={schema.id}>
                      <ColorSchemaSquare schema={schema} size={'medium'} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {space_out.length !== 0 && (
              <div className='mt-3 mb-2'>
                <p className='flex text-md font-semibold px-2 py-2 gap-1 items-center'>
                  <ArrowIcon />
                  외부
                </p>
                <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center gap-2 p-2 w-fit'>
                  {space_out.map(schema => (
                    <li key={schema.id}>
                      <ColorSchemaSquare schema={schema} size={'medium'} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

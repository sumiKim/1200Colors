'use client';
import useSWR from 'swr';
import ColorSchemaSquare from '../components/ui/colorchips/ColorSchemaSquare';
import { ResSchemas } from '@/service/type';
import { makeReqUrlForSchema, useSearchBox } from '../context/SearchBoxContext';
import Error from '../components/ui/Error';
import NoSearchResults from '../components/ui/NoSearchResults';

export default function ColorSchemaPage() {
  const { searchType, searchKeyword } = useSearchBox();
  const reqUrl = makeReqUrlForSchema(searchType, searchKeyword);
  const { data, isLoading, error } = useSWR<ResSchemas>(
    reqUrl !== '' && reqUrl
  );

  const schemas = data?.result.resColor;

  return (
    <div className='bg-white h-screen lg:pl-60 lg:pr-5 lg:pt-4 flex justify-center'>
      <div className='h-3/4 w-fit overflow-scroll'>
        <section className='w-fit p-1 bg-white'>
          {error && <Error />}
          {(reqUrl === '' || schemas?.length === 0) && (
            <NoSearchResults type={searchType} keyword={searchKeyword} />
          )}
          {schemas && (
            <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center gap-2 p-2 w-fit'>
              {schemas.map(schema => (
                <li key={schema.id}>
                  <ColorSchemaSquare schema={schema} size={'medium'} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

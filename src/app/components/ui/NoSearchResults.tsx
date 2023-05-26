import { convertType, SearchType } from '@/app/context/SearchBoxContext';
import SearchIcon from './icons/SearchIcon';

type Props = {
  type: SearchType;
  keyword: string;
};
export default function NoSearchResults({ type, keyword }: Props) {
  return (
    <section className='mt-32 flex flex-col items-center justify-end'>
      <div className='text-2xl font-semibold'>
        <span className='text-sh_text89'>{`'${keyword}' `}</span>
        <span>에 대한 검색결과</span>
      </div>
      <div className='text-sh_text126 my-4'>
        <SearchIcon size='large' />
      </div>
      <div className='text-sh_text126'>{`${convertType(
        type
      )} 결과가 없습니다.`}</div>
    </section>
  );
}

import BadgeList from './BadgeList';
import SearchBox from './SearchBox';

type Props = {
  titleName: '컬러' | '배색';
  badgeView: boolean;
};

export default function PageTitle({ titleName, badgeView }: Props) {
  return (
    <div className='relative z-10 w-full h-32 flex bg-white border-b-2'>
      <div className='hidden lg:block w-56 font-bold text-2xl text-right pt-6 pr-10'>
        {titleName}
      </div>
      <div className='flex flex-col max-w-xs sm:max-w-md md:max-w-3xl lg:w-full mx-auto justify-center gap-3'>
        {/* 중앙 정렬을 위해 한 번 더 감싸기 */}
        {/* <div className='w-full'> */}
        <SearchBox />
        <div className='flex justify-center'>
          {badgeView ? <BadgeList /> : ''}
        </div>
      </div>
    </div>
  );
}

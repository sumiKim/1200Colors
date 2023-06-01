import { placeNav } from '@/data/place';
import PlaceImgs from '../components/PlaceImgs';
import PlaceNav from '../components/PlaceNav';
import PlaceNavItem from '../components/PlaceNavItem';
import PlaceNavProvider from '../context/PlaceNavContext';

export default function PlacePage() {
  return (
    <PlaceNavProvider>
      <div className='w-full hidden lg:flex justify-center pt-10 lg:px-24 2xl:px-48 '>
        <nav className='basis-1/4'>
          <PlaceNav />
        </nav>
        <div className='basis-3/4 bg-[#333333] flex items-center'>
          {/* 어떤 탭을 클릭했는지에 따라 이미지 띄우기 */}
          <PlaceImgs />
        </div>
      </div>
      {/* 모바일 */}
      <ul className='w-full block lg:hidden'>
        {placeNav.map((item, index) => (
          <li key={`mobile_${item.id}`}>
            <PlaceNavItem index={index} item={item} useType={'mobile'} />
          </li>
        ))}
      </ul>
    </PlaceNavProvider>
  );
}

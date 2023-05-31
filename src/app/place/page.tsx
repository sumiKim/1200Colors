import PlaceImgs from '../components/PlaceImgs';
import PlaceNav from '../components/PlaceNav';
import PlaceNavItem from '../components/PlaceNavItem';
import PlaceNavProvider, { IPlaceNav } from '../context/PlaceNavContext';

export const placeNav: IPlaceNav[] = [
  { id: '1', type: 'side', side: '외부' },
  { id: '2', type: 'form', side: '외부', form: '주거' },
  {
    id: '3',
    type: 'data',
    side: '외부',
    form: '주거',
    data: '단독주택',
  },
  {
    id: '4',
    type: 'data',
    side: '외부',
    form: '주거',
    data: '공용주택',
  },
  { id: '5', type: 'form', side: '외부', form: '상업' },
  {
    id: '6',
    type: 'data',
    side: '외부',
    form: '상업',
    data: '저층',
  },
  {
    id: '7',
    type: 'data',
    side: '외부',
    form: '상업',
    data: '중고층',
  },
  { id: '8', type: 'side', side: '내부' },
  { id: '9', type: 'form', side: '내부', form: '주거공간' },
  {
    id: '10',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '거실',
  },
  {
    id: '11',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '침실',
  },
  {
    id: '12',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '식당',
  },
  { id: '13', type: 'form', side: '내부', form: '상업공간' },
  {
    id: '14',
    type: 'data',
    side: '내부',
    form: '상업공간',
    data: '사무실',
    param: 'office',
  },
  {
    id: '15',
    type: 'data',
    side: '내부',
    form: '상업공간',
    data: '회의실',
    param: 'meeting_room',
  },
];

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

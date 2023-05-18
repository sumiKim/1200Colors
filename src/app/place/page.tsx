import PlaceNav, { IPlaceNav } from '../components/PlaceNav';
import PlaceNavItem from '../components/PlaceNavItem';

const placeNav: IPlaceNav[] = [
  { id: '1', type: 'side', side: '외부' },
  { id: '2', type: 'form', side: '외부', form: '주거' },
  { id: '3', type: 'data', side: '외부', form: '주거', data: '단독주택' },
  { id: '4', type: 'data', side: '외부', form: '주거', data: '공용주택' },
  { id: '5', type: 'form', side: '외부', form: '상업' },
  { id: '6', type: 'data', side: '외부', form: '상업', data: '저층' },
  { id: '7', type: 'data', side: '외부', form: '상업', data: '중고층' },
  { id: '8', type: 'side', side: '내부' },
  { id: '9', type: 'form', side: '내부', form: '주거공간' },
  { id: '10', type: 'data', side: '내부', form: '주거공간', data: '거실' },
  { id: '11', type: 'data', side: '내부', form: '주거공간', data: '침실' },
  { id: '12', type: 'data', side: '내부', form: '주거공간', data: '식당' },
  { id: '13', type: 'form', side: '내부', form: '상업공간' },
  { id: '14', type: 'data', side: '내부', form: '상업공간', data: '사무실' },
  { id: '15', type: 'data', side: '내부', form: '상업공간', data: '회의실' },
];
export default function PlacePage() {
  return (
    <>
      <div className='w-full hidden lg:flex justify-center pt-10 lg:px-24 '>
        <nav className='basis-1/4'>
          <PlaceNav placeNav={placeNav} />
        </nav>
        <div className='basis-3/4 bg-black'>
          {/* 어떤 탭을 클릭했는지에 따라 이미지 띄우기 */}
          <div></div>
        </div>
      </div>
      <div className='w-full block lg:hidden'>
        {placeNav.map(item => (
          <PlaceNavItem item={item} useType={'mobile'} />
        ))}
      </div>
    </>
  );
}

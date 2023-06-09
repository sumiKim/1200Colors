import { IPlaceNav } from '@/app/context/PlaceNavContext';

export const placeNav: IPlaceNav[] = [
  { id: '1', type: 'side', side: '외부' },
  { id: '2', type: 'form', side: '외부', form: '주거' },
  {
    id: '3',
    type: 'data',
    side: '외부',
    form: '주거',
    data: '단독주택',
    param: 'detached_house',
  },
  {
    id: '4',
    type: 'data',
    side: '외부',
    form: '주거',
    data: '공용주택',
    param: 'apartment',
  },
  { id: '5', type: 'form', side: '외부', form: '상업' },
  {
    id: '6',
    type: 'data',
    side: '외부',
    form: '상업',
    data: '저층',
    param: 'low-rise_building',
  },
  {
    id: '7',
    type: 'data',
    side: '외부',
    form: '상업',
    data: '중고층',
    param: 'high-rise_building',
  },
  { id: '8', type: 'side', side: '내부' },
  { id: '9', type: 'form', side: '내부', form: '주거공간' },
  {
    id: '10',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '거실',
    param: 'living_room',
  },
  {
    id: '11',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '침실',
    param: 'bed_room',
  },
  {
    id: '12',
    type: 'data',
    side: '내부',
    form: '주거공간',
    data: '식당',
    param: 'dining_room',
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

export type SearchType =
  | 'colorname'
  | 'samhwa'
  | 'H V/C'
  | 'NCS'
  | 'Pantone'
  | 'adjective';

export type Menu = {
  key: number;
  value: SearchType;
  msg: string;
};

export const colorMenu: Menu[] = [
  {
    key: 1,
    value: 'colorname',
    msg: '색이름으로 검색해보세요.',
  },
  {
    key: 2,
    value: 'samhwa',
    msg: '삼화코드로 검색해보세요.',
  },
  {
    key: 3,
    value: 'H V/C',
    msg: 'H V/C으로 검색해보세요.',
  },
  {
    key: 4,
    value: 'NCS',
    msg: 'NCS으로 검색해보세요.',
  },
  {
    key: 5,
    value: 'Pantone',
    msg: 'Pantone으로 검색해보세요.',
  },
];

export const colorSchemaMenu: Menu[] = [
  {
    key: 1,
    value: 'colorname',
    msg: '색이름으로 검색해보세요.',
  },
  {
    key: 2,
    value: 'samhwa',
    msg: '삼화코드으로 검색해보세요.',
  },
];

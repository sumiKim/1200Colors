'use client';
import { config } from '../util/config';
import React, { createContext, useContext, useState } from 'react';

interface ISearchBoxContext {
  searchType: SearchType;
  searchKeyword: string;
  handleSearchType: (type: SearchType) => void;
  handleSearchKeyword: (keyword: string) => void;
  badgeList: Array<string>;
  isSelected: Array<boolean>;
  handleClick: (index: number) => void;
  initBadgeState: (index: number) => void;
}

const defaultState = {
  searchType: '' as SearchType,
  searchKeyword: '',
  handleSearchType: (type: SearchType) => {},
  handleSearchKeyword: (keyword: string) => {},
  badgeList: [] as Array<string>,
  isSelected: [] as Array<boolean>,
  handleClick: (index: number) => {},
  initBadgeState: (index: number) => {},
};

type Props = {
  children: React.ReactNode;
};

export type SearchType =
  | 'colorname'
  | 'samhwa'
  | 'H V/C'
  | 'NCS'
  | 'Pantone'
  | 'adjective';

type ResultCheckKeyword = {
  res: boolean;
  keyword: string;
};

export const SearchBoxContext = createContext(defaultState);

export default function SearchBoxProvider({ children }: Props) {
  // 키워드 겁색
  const [searchType, setSearchType] = useState<SearchType>('colorname');
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchType = (type: SearchType) => {
    setSearchType(type);
  };
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  // 형용사 검색
  const [isSelected, setIsSelected] = useState<boolean[]>([]);
  const badgeList = ['편안한', '자연의', '모던한', '격조있는'];

  const initBadgeState = (index: number) => {
    const newArr = Array(badgeList.length).fill(false);

    if (index !== -1) {
      newArr[index] = true;
    }

    setIsSelected(newArr);
  };

  const handleClick = (index: number) => {
    initBadgeState(index);

    // 검색 url !
    setSearchType('adjective');
    setSearchKeyword(badgeList[index]);
  };

  return (
    <SearchBoxContext.Provider
      value={{
        searchType,
        searchKeyword,
        handleSearchType,
        handleSearchKeyword,
        badgeList,
        isSelected,
        handleClick,
        initBadgeState,
      }}
    >
      {children}
    </SearchBoxContext.Provider>
  );
}

export const useSearchBox = () => useContext(SearchBoxContext);

const colornameSearchKeyword = [
  { reqWord: 'R', keyword: ['빨간색', '빨강', '레드', 'red'] },
  {
    reqWord: 'YR',
    keyword: ['주황색', '주황', '오렌지', 'yellowred', 'orange'],
  },
  { reqWord: 'Y', keyword: ['노란색', '노랑', '옐로우', 'yellow'] },
  { reqWord: 'GY', keyword: ['그린옐로우', '옐로우그린', 'greenyellow'] },
  { reqWord: 'G', keyword: ['초록색', '초록', '녹색', '그린', 'green'] },
  { reqWord: 'BG', keyword: ['청록색', '청록', '블루그린', 'bluegreen'] },
  { reqWord: 'B', keyword: ['파란색', '파랑', '블루', 'blue'] },
  { reqWord: 'PB', keyword: ['남색', '퍼플블루', 'purpleblue'] },
  {
    reqWord: 'P',
    keyword: ['보라색', '보라', '퍼플', '바이올렛', 'purple', 'violet'],
  },
  { reqWord: 'RP', keyword: ['자주색', '자주', 'purpleblue'] },
  { reqWord: 'Pink', keyword: ['분홍색', '분홍', '핑크', 'pink'] },
  { reqWord: 'Brown', keyword: ['갈색', '브라운', 'brown'] },
  { reqWord: 'White', keyword: ['흰색', '하양', '화이트', 'white'] },
  { reqWord: 'Grey', keyword: ['회색', '그레이', 'grey', 'gray'] },
  { reqWord: 'Black', keyword: ['검은색', '검정', '블랙', 'black'] },
];

const checkKeyword = (
  searchType: SearchType,
  searchKeyword: string
): ResultCheckKeyword => {
  let r: ResultCheckKeyword = { res: false, keyword: '' };

  if (searchType === 'colorname') {
    const manufactureWord = searchKeyword.trim().toLowerCase(); // 공백 없애고, 소문자

    let i = 0;
    for (let i = 0; i < colornameSearchKeyword.length; i++) {
      let item = colornameSearchKeyword[i];
      if (item.keyword.includes(manufactureWord)) {
        i++;
        r = { res: true, keyword: item.reqWord };
        break;
      }
    }

    if ((i = 0)) {
      r = { res: false, keyword: searchKeyword };
    }
  } else {
    r = { res: true, keyword: searchKeyword };
  }
  return r;
};

export const makeReqUrlForSchema = (
  searchType: SearchType,
  searchKeyword: string
) => {
  let reqUrl = '';

  if (searchType === 'adjective') {
  } else {
    if (searchKeyword === '') {
      reqUrl = `${config.server.baseURL}/schema`;
    } else {
      const result = checkKeyword(searchType, searchKeyword);
      if (result.res) {
        reqUrl = `${config.server.baseURL}/schema?type=${searchType}&code=${result.keyword}`;
      }
    }
  }
  return reqUrl;
};

export const makeReqUrlForColor = (
  searchType: SearchType,
  searchKeyword: string
) => {
  let reqUrl = '';

  if (searchKeyword === '') {
    reqUrl = `${config.server.baseURL}/color`;
  } else {
    switch (searchType) {
      case 'colorname':
        const result = checkKeyword(searchType, searchKeyword);
        if (result.res) {
          reqUrl = `${config.server.baseURL}/color?type=colorname&code=${result.keyword}`;
        } else {
          reqUrl = '';
        }
        break;
      case 'samhwa':
        reqUrl = `${config.server.baseURL}/color?type=samhwa&code=${searchKeyword}`;
        break;
      case 'H V/C':
        reqUrl = `${config.server.baseURL}/color?type=hvc&code=${convertSpace(
          searchKeyword
        )}`;
        break;
      case 'NCS':
        reqUrl = `${config.server.baseURL}/color?type=ncs&code=${convertSpace(
          searchKeyword
        )}`;
        break;
      case 'Pantone':
        reqUrl = `${
          config.server.baseURL
        }/color?type=pantone&code=${convertSpace(searchKeyword)}`;
        break;
      default:
        reqUrl = `${config.server.baseURL}/color`;
        break;
    }
  }
  return reqUrl;
};

const convertSpace = (keyword: string) => {
  return keyword.replaceAll(' ', '%20');
};

export function convertType(type: SearchType): string {
  let converted: string = type;

  if (type === 'colorname') converted = '색이름';
  if (type === 'samhwa') converted = '삼화코드';
  if (type === 'adjective') converted = '형용사';

  return converted;
}

function converAdjective(adjective: string): string {
  let converted: string = '';

  if (adjective === '편안한') converted = '1';
  if (adjective === '자연의') converted = '2';
  if (adjective === '모던한') converted = '3';
  if (adjective === '격조있는') converted = '4';

  return converted;
}

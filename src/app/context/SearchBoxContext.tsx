'use client';
import { config } from '../util/config';
import React, { createContext, useContext, useState } from 'react';

interface ISearchBoxContext {
  searchType: string;
  searchKeyword: string;
  handleSearchType: (type: SearchType) => void;
  handleSearchKeyword: (keyword: string) => void;
}

const defaultState = {
  searchType: '',
  searchKeyword: '',
  handleSearchType: () => {},
  handleSearchKeyword: () => {},
} as unknown as ISearchBoxContext;

type Props = {
  children: React.ReactNode;
};

export type SearchType = 'colorname' | 'samhwa' | 'H V/C' | 'NCS' | 'Pantone';

type ResultCheckKeyword = {
  res: boolean;
  keyword: string;
};

export const SearchBoxContext = createContext(defaultState);

export default function SearchBoxProvider({ children }: Props) {
  const [searchType, setSearchType] = useState<SearchType>('colorname'); // 검색 타입 ?
  const [searchKeyword, setSearchKeyword] = useState(''); // 검색 키워드 ?

  const handleSearchType = (type: SearchType) => {
    setSearchType(type);
  };
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
  };

  return (
    <SearchBoxContext.Provider
      value={{
        searchType,
        searchKeyword,
        handleSearchType,
        handleSearchKeyword,
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
  searchType: string,
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

export const makeReqUrl = (searchType: string, searchKeyword: string) => {
  let reqUrl = '';

  if (searchKeyword === '') {
    reqUrl = `${config.server.baseURL}/schema`;
  } else {
    const result = checkKeyword(searchType, searchKeyword);
    if (result.res) {
      reqUrl = `${config.server.baseURL}/schema?type=${searchType}&code=${result.keyword}`;
    }
  }
  return reqUrl;
};

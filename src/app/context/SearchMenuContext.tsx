'use client';

import React, { createContext, useContext, useState } from 'react';

type Menu = {
  id: number;
  name: string;
};

interface ISearchContext {
  menu: Menu;
  changeMenu: (id: number) => void;
}

const defaultState = {
  menu: {
    id: 0,
    name: '',
  },
  changeMenu: () => {},
} as ISearchContext;

export const dropdownMenu = [
  {
    id: 0,
    name: '색상명',
  },
  {
    id: 1,
    name: '삼화코드',
  },
  {
    id: 2,
    name: 'NCS',
  },
  {
    id: 3,
    name: '팬톤',
  },
];

type Props = {
  children: React.ReactNode;
};

export const SearchMenuContext = createContext(defaultState);

export default function SearchMenuProvider({ children }: Props) {
  const [menu, setMenu] = useState<Menu>(dropdownMenu[0]);

  const changeMenu = (id: number) => {
    setMenu(dropdownMenu[id]);
  };

  return (
    <SearchMenuContext.Provider value={{ menu, changeMenu }}>
      {children}
    </SearchMenuContext.Provider>
  );
}

export const useSearchMenu = () => useContext(SearchMenuContext);

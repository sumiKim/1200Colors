'use client';

import { createContext, useContext, useState } from 'react';

export type IPlaceNav = {
  id: string;
  type: string;
  side?: string;
  form?: string;
  data?: string;
  selected?: boolean;
  param?: string;
};

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  selectedIndex: number;
  selected: Array<boolean>;
  handleSetSelected: () => void;
  handleClick: (id: number) => void;
};

const defaultValue = {
  selectedIndex: 0,
  selected: [],
  handleSetSelected: () => {},
  handleClick: (id: number) => {},
};

export const PlaceNavContext = createContext<ContextProps>(defaultValue);
export default function PlaceNavProvider({ children }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(
    defaultValue.selectedIndex
  );
  const [selected, setSelected] = useState<Array<boolean>>(
    defaultValue.selected
  );

  const handleSetSelected = () => {};
  const handleClick = (id: number) => {
    console.log('click');
    console.log(id);
    const newArr = new Array(14).fill(false);
    newArr[id] = true;
    setSelected(newArr);
    setSelectedIndex(id);
  };

  return (
    <PlaceNavContext.Provider
      value={{ selectedIndex, selected, handleSetSelected, handleClick }}
    >
      {children}
    </PlaceNavContext.Provider>
  );
}

export const usePlaceNavContext = () => useContext(PlaceNavContext);

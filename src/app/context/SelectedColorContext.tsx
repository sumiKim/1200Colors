'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Color } from '@/service/type';

import {
  getDataAtStorage,
  insertDataAtStorage,
  removeDataAtStorage,
} from '../util/storage';

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  selectedList: Color[];
  insertColor: (c: Color) => void;
  removeColor: (c: Color) => void;
};

const defaultValue = {
  selectedList: [],
  insertColor: (c: Color) => {},
  removeColor: (c: Color) => {},
};

export const SelectedColorContext = createContext<ContextProps>(defaultValue);

export default function SelectedColorProvider({ children }: Props) {
  const [selectedList, setSelectedList] = useState<Color[]>([]);

  useEffect(() => {
    const storageData = getDataAtStorage();
    setSelectedList([...storageData]);
  }, []);

  // 이거는 팔레트 싱크 맞음
  const insertColor = (selectedColor: Color) => {
    setSelectedList(prev => [...prev, selectedColor]);
    insertDataAtStorage(selectedColor);
  };

  // 이거는 팔레트 싱크 안맞음
  const removeColor = (selectedColor: Color) => {
    setSelectedList(
      selectedList.filter(
        prev => prev.samwha_code !== selectedColor.samwha_code
      )
    );
    removeDataAtStorage(selectedColor);
  };

  return (
    <SelectedColorContext.Provider
      value={{ selectedList, insertColor, removeColor }}
    >
      {children}
    </SelectedColorContext.Provider>
  );
}

export const useSelectedColor = () => useContext(SelectedColorContext);

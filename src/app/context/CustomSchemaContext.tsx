'use client';
import { createContext, useContext, useState } from 'react';
import { Color, Schema } from '@/service/type';

let DefaultColor = {
  id: 0,
  page_num: '',
  samwha_code: '',
  color_group: '',
  munsell: '',
  color: '',
  HVC_H: '',
  HVC_V: '',
  HVC_C: '',
  R: 0,
  G: 0,
  B: 0,
  HEX: '',
  C: 0,
  M: 0,
  Y: 0,
  K: 0,
  'L*': '',
  'a*': '',
  'b*': '',
  NCS: '',
  Pantone: '',
};

let DefaultColorSchema = {
  id: '',
  secondary: { ...DefaultColor },
  accent: { ...DefaultColor },
  base: { ...DefaultColor },
};

type Props = {
  children: React.ReactNode;
};

export type SchemaArea = 'secondary' | 'accent' | 'base';
type ContextProps = {
  schema: Schema;
  initColor: (schema: Schema) => void;
  changeColor: (key: SchemaArea, c: Color) => void;
  changeArea?: SchemaArea;
  handleChangeArea: (area: SchemaArea) => void;
};

const defaultValue = {
  schema: DefaultColorSchema,
  initColor: (schema: Schema) => {},
  changeColor: (key: SchemaArea, c: Color) => {},
  handleChangeArea: (area: SchemaArea) => {},
};

export const CustomSchemaContext = createContext<ContextProps>(defaultValue);

export default function CustomSchemaProvider({ children }: Props) {
  const [schema, setSchema] = useState<Schema>(DefaultColorSchema);
  const [changeArea, setChangeArea] = useState<SchemaArea>(); // 어떤 영역 바꾸려고 ?

  const initColor = (schema: Schema) => {
    setSchema({ ...schema });
  };

  const changeColor = (key: 'secondary' | 'accent' | 'base', c: Color) => {
    const copyArr: Schema = { ...schema };
    switch (key) {
      case 'secondary':
        copyArr.secondary = c;
        break;
      case 'accent':
        copyArr.accent = c;
        break;
      case 'base':
        copyArr.base = c;
        break;
    }

    setSchema({ ...copyArr });
  };

  const handleChangeArea = (area: SchemaArea) => {
    setChangeArea(area);
  };

  return (
    <CustomSchemaContext.Provider
      value={{ schema, initColor, changeColor, changeArea, handleChangeArea }}
    >
      {children}
    </CustomSchemaContext.Provider>
  );
}

export const useCustomSchema = () => useContext(CustomSchemaContext);

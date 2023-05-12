//---> Color
export type Color = {
  id: number;
  page_num?: string;
  samwha_code: string;
  color_group?: string;
  munsell: string;
  color?: string;
  HVC_H: string;
  HVC_V: string;
  HVC_C: string;
  R: number;
  G: number;
  B: number;
  HEX: string;
  C: number;
  M: number;
  Y: number;
  K: number;
  'L*'?: string;
  'a*'?: string;
  'b*'?: string;
  NCS?: string;
  Pantone: string;
};

export type colorObj = {
  [key: string]: string;
};

//---> Schema
export type Obj = {
  [key: string]: string;
};

// key가 string 이라는 것을 표현하고 싶다.
export type CsvColorSchema = {
  [id: string]: string;
  secondary: string;
  accent: string;
  base: string;
};

export type ColorSchema = {
  id: string;
  secondary: Color;
  accent: Color;
  base: Color;
};

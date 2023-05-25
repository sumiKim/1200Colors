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

//---> Schema
export type Schema = {
  id: string;
  secondary: Color;
  accent: Color;
  base: Color;
};

//---> Type Result for api
export type ResColors = {
  status: boolean;
  result: Color[];
};

export type ResColor = {
  status: boolean;
  result: Color;
};

export type ResSchemas = {
  status: boolean;
  result: {
    searchType: string;
    resColor: Schema[];
  };
};

export type ResSchema = {
  status: boolean;
  result: Schema;
};

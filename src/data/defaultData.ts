export let DefaultColor = {
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

export let DefaultColorSchema = {
  id: '',
  secondary: { ...DefaultColor },
  accent: { ...DefaultColor },
  base: { ...DefaultColor },
};

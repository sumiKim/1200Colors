import { readFile } from 'fs/promises';
import path from 'path';
import { Color, getColorInfo } from './1200colors';

type Obj = {
  [key: string]: string;
};

// key가 string 이라는 것을 표현하고 싶다.
type CsvColorSchema = {
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

async function csvToJson() {
  const filePath = path.join(
    process.cwd(),
    'data',
    'color',
    '1200colorschemas.csv'
  );

  return readFile(filePath, 'utf-8').then(data => {
    const dataArr = data.split('\r\n');

    const jsonArray: any[] = [];
    const keys = dataArr[0].split(',');

    dataArr.map(data => {
      const obj: Obj = {};

      const row = data.split(','); //

      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = row[i];
      }
      jsonArray.push(obj);
    });

    jsonArray.shift(); // 배열 1번째는 key값이라서 뺌.
    return JSON.stringify(jsonArray);
  });
}

export async function getAllData() {
  return await csvToJson().then<CsvColorSchema[]>(JSON.parse);
}

// // 1개의 schema의 상세정보 가져오는 함수
export async function getColorSchemaToCsvSchema(colorSchemas: CsvColorSchema) {
  let obj: ColorSchema = {
    id: '',
    secondary: DefaultColor,
    accent: DefaultColor,
    base: DefaultColor,
  };
  const secondary = (await getColorInfo(colorSchemas.secondary)) as Color;
  const accent = (await getColorInfo(colorSchemas.accent)) as Color;
  const base = (await getColorInfo(colorSchemas.base)) as Color;

  const firstMenuId = Object.keys(colorSchemas)[0];
  const value = colorSchemas[firstMenuId];

  obj.id = value;
  obj.secondary = secondary;
  obj.accent = accent;
  obj.base = base;

  return obj;
}

// // 전체 스키마의 상세정보를 가져오는 함수 => 이거 안됨 흠.
export async function getAllColorschemas() {
  // FeaturedColorSchemas
}

// 색상의 추천 스키마 -> 검색으로 바꾸기
export async function getRecommandColorschemas(key: string) {
  const allschemas = await getAllData(); // CsvColorSchema Type

  // 강조, 주조, 보조에서 key가 1개라도 해당되면 가져오기
  const recommandSchemaArr: CsvColorSchema[] = [];
  allschemas.filter(schema => {
    if (
      schema.secondary === key ||
      schema.accent === key ||
      schema.base === key
    ) {
      recommandSchemaArr.push(schema);
    }
  });

  return getColorSchemaToCsvSchema(recommandSchemaArr[0]);
}

export async function getSchemaDetail(id: string) {
  const allschemas = await getAllData();

  const schemaArr: CsvColorSchema[] = [];
  allschemas.filter(schema => {
    const f = Object.keys(schema)[0];
    const fv = schema[f];

    if (fv === id) {
      schemaArr.push(schema);
    }
  });

  return getColorSchemaToCsvSchema(schemaArr[0]);
}

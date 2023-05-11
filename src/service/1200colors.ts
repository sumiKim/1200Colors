import { readFile } from 'fs/promises';
import path from 'path';

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

type colorObj = {
  [key: string]: string;
};

async function csvToJson() {
  const filePath = path.join(process.cwd(), 'data', 'color', '1200colors.csv');

  return readFile(filePath, 'utf-8').then(data => {
    const dataArr = data.split('\r\n');

    const jsonArray: any[] = [];
    const keys = dataArr[0].split(',');

    dataArr.map(data => {
      const obj: colorObj = {};

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

export async function getAll1200Colors() {
  return await csvToJson().then<Color[]>(JSON.parse);
}

export async function getColorInfo(key: string) {
  const colors = await getAll1200Colors();
  return colors.filter(color => color.samwha_code === key).shift();
}

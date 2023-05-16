import { readFile } from 'fs/promises';
import { Color, colorObj } from './type';
import path from 'path';

async function csvToJson() {
  const filePath = path.join(process.cwd(), 'data', 'color', '1200colors.csv');

  return readFile(filePath, 'utf-8').then(data => {
    const dataArr = data.split('\n');

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

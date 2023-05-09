import { readFile } from 'fs/promises';
import path from 'path';

export type Color = {
  id: number;
  page_code: string;
  R: number;
  G: number;
  B: number;
  HEX: string;
  CMYK_C: number;
  CMYK_M: number;
  CMYK_Y: number;
  CMYK_K: number;
  HVC_H: string;
  HVC_V: number;
  HVC_C: number;
  Pantone: string; // 19-0205    15-6304
};

// fetch가 아닌 것, 호출 중복하고 싶을 때 -> 캐시 설정.
// export const getAllColors = cache( async () => {
//     console.log('getAllColors');
//     const filePath = path.join(process.cwd(), 'data','color','1400.json');
//     return readFile(filePath, 'utf-8')
//     .then<Color[]>(JSON.parse);
// })

export async function getAllColors(): Promise<Color[]> {
  const filePath = path.join(process.cwd(), 'data', 'color', '1400.json');
  return readFile(filePath, 'utf-8').then<Color[]>(JSON.parse);
}

export async function getPantoneColors(pantone: string): Promise<Color[]> {
  return getAllColors().then(colors =>
    colors.filter(color => color.Pantone.includes(pantone))
  );
}

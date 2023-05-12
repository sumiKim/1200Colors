import { Color } from '@/service/type';

const STORAGEKEY = 'Color1200';

export function getDataAtStorage(): Color[] {
  const storageData = localStorage.getItem(STORAGEKEY);
  const selectedArr = JSON.parse(storageData ?? '[]');
  return selectedArr;
}

function setDataAtStorage(selectedArr: Color[]) {
  localStorage.setItem(STORAGEKEY, JSON.stringify(selectedArr));
}

export function insertDataAtStorage(c: Color) {
  const selectedArr = getDataAtStorage();
  selectedArr.push(c);
  setDataAtStorage(selectedArr);
}

export function removeDataAtStorage(c: Color) {
  let selectedArr = getDataAtStorage();
  selectedArr = selectedArr.filter(
    color => color.samwha_code !== c.samwha_code
  );
  setDataAtStorage(selectedArr);
}

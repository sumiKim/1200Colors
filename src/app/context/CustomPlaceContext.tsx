'use client';
import { Color } from '@/service/type';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { AreaColor } from '../place/[id]/page';
import { config } from '../util/config';

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

type ContextProps = {
  infos: AreaColor[];
  setInfos: Dispatch<SetStateAction<AreaColor[]>>;
  initInfo: (colorInfos: AreaColor[], originImg: string) => void;
  handleChangeArea: (id: string) => void;
  target: string;
  changePlaceColor: (id: number, c: Color) => AreaColor[];
  requestAPI: (arr: AreaColor[]) => void;
  blendImg: string;
};

const defaultValue = {
  infos: [],
  setInfos: () => {},
  initInfo: (colorInfos: AreaColor[], originImg: string) => {},
  handleChangeArea: (id: string) => {},
  target: '',
  changePlaceColor: (id: number, c: Color) => {
    return [];
  },
  requestAPI: (arr: AreaColor[]) => {},
  blendImg: '',
};

export const CustomPlaceContext = createContext<ContextProps>(defaultValue);

export default function CustomPlaceProvider({ children }: Props) {
  const [originImg, setOriginImg] = useState<string>('');
  const [regionImgs, setRegionImgs] = useState<string[]>([]);
  const [infos, setInfos] = useState<AreaColor[]>([]);
  const [target, setTarget] = useState<string>(''); // 어떤 영역 바꾸려고 ?
  const [blendImg, setBlendImg] = useState<string>('');

  const initInfo = (colorInfos: AreaColor[], originImg: string) => {
    const regionImgID: string[] = [];
    colorInfos.map(info => {
      regionImgID.push(info.id.toString());
    });

    setOriginImg(originImg);
    setRegionImgs(regionImgID);
    setInfos(colorInfos);
  };

  const changePlaceColor = (id: number, c: Color) => {
    const newArr: AreaColor[] = [];

    infos.map(info => {
      const item =
        info.id === id
          ? { id: id, korean_letter: info.korean_letter, color: c }
          : info;
      newArr.push(item);
    });
    setInfos(newArr);

    return newArr;
  };

  const handleChangeArea = (id: string) => {
    setTarget(id);
  };

  const requestAPI = async (arr: AreaColor[]) => {
    // console.log('infos');
    // console.log(infos);

    // console.log('arr');
    console.log(arr);

    // 요청 컬러 배열 만들기
    const reqColors: string[] = [];
    arr.map(c => {
      const HEX_VALUE = c.color.HEX;
      const req_hex = HEX_VALUE.replace('#', '');
      reqColors.push(req_hex);
    });

    const data = {
      base_image_path: originImg,
      region_image_ids: regionImgs,
      region_colors: reqColors,
    };

    console.log('blend요청');
    console.log(data);

    const res = await fetch(`${config.server.baseURL}/space/image_blend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(data => {
      return data.json();
    });
    setBlendImg(res.base64);
  };

  return (
    <CustomPlaceContext.Provider
      value={{
        infos,
        setInfos,
        initInfo,
        handleChangeArea,
        target,
        changePlaceColor,
        requestAPI,
        blendImg,
      }}
    >
      {children}
    </CustomPlaceContext.Provider>
  );
}

export const useCustomPlaceContext = () => useContext(CustomPlaceContext);

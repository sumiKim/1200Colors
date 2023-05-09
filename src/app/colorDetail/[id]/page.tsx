'use client';
import { Color } from '@/service/colors';
import { useEffect } from 'react';
import ColorDetail from '../../components/ColorDetail';
import NotFound from './not-found';

type Props = { params: { id: number } };

export default function ColorDetailPage({ params: { id } }: Props) {
  // id 값으로 Color 데이터 가져오기 API
  const color: Color = {
    id: 1118,
    page_code: '2187B',
    R: 157,
    G: 174,
    B: 24,
    HEX: '9dae18',
    CMYK_C: 48,
    CMYK_M: 23,
    CMYK_Y: 99,
    CMYK_K: 0,
    HVC_H: '4.0GY',
    HVC_V: 6.2,
    HVC_C: 8.6,
    Pantone: '15-0542 TPG',
  };

  if (!color) {
    NotFound();
  }

  useEffect(() => {
    // 색 배경
    const color__value = `#${color.HEX}`;

    const divElement = document.getElementById(
      `?_${color.page_code}`
    )! as HTMLDivElement;
    divElement.style.backgroundColor = color__value;

    // const divElement2 = document.getElementById(
    //   `??_${color.page_code}`
    // )! as HTMLDivElement;
    // divElement2.style.backgroundColor = color__value;
  });

  // 한글 깨짐 : 추천배색 안넣을거면 상관 없음
  // 폰트 설정 안됨
  const handleClick = () => {
    const div = document.getElementById(`_${color.id}`) as HTMLElement;

    const cloneA = div.innerHTML;
    console.log(cloneA);

    let w = document.documentElement.clientWidth; // 숫자 여야함
    const h = document.documentElement.clientHeight;

    // let doc = new jsPDF('l', 'px', [w, h]);

    // doc.html(div, {
    //   callback: function (doc) {
    //     doc.save('sumi');
    //   },
    //   x: 10,
    //   y: 10,
    // });
  };

  return (
    <>
      {/* <ColorDetailForPDF
        color={color}
        buttonview={true}
        handleClick={handleClick}
      /> */}
      <ColorDetail color={color} buttonview={true} handleClick={handleClick} />
    </>
  );
}

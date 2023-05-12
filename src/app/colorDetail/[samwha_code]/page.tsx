'use client';

import { Color } from '@/service/type';
import ColorInfo from '@/app/components/ColorInfo';
import DetailHeader from '@/app/components/DetailHeader';
import RecommandColorSchema from '@/app/components/RecommandColorSchema';
import NotFound from './not-found';
import ColorSquare from '@/app/components/ui/colorchips/ColorSquare';
import useSWR from 'swr';

type Props = { params: { samwha_code: string } };

export default function ColorDetailPage({ params: { samwha_code } }: Props) {
  if (!samwha_code) {
    NotFound();
  }

  const {
    data: color,
    isLoading,
    error,
  } = useSWR<Color>(`/api/detail/${samwha_code}`);

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      {color && <DetailHeader color={color} title='컬러' subtitle='컬러정보' />}
      <div className='w-full flex flex-col md:items-stretch md:flex-row gap-10'>
        <div className='basis-1/2 w-full'>
          {color && <ColorSquare color={color} />}
        </div>
        <div className='flex flex-col sm:flex-row md:flex-col basis-1/2'>
          <div className='basis-1/2'>
            {color && <ColorInfo color={color} type={'color'} />}
          </div>
          <div>{color && <RecommandColorSchema color={color} />}</div>
        </div>
      </div>
    </section>
  );
}

// 한글 깨짐 : 추천배색 안넣을거면 상관 없음
// 폰트 설정 안됨

// const handleClick = () => {
//   const div = document.getElementById(`_${color?.samwha_code}`) as HTMLElement;

//   const cloneA = div.innerHTML;
//   console.log(cloneA);

//   let w = document.documentElement.clientWidth; // 숫자 여야함
//   const h = document.documentElement.clientHeight;

//   // let doc = new jsPDF('l', 'px', [w, h]);

//   // doc.html(div, {
//   //   callback: function (doc) {
//   //     doc.save('sumi');
//   //   },
//   //   x: 10,
//   //   y: 10,
//   // });
// };

{
  /* <ColorDetailForPDF
        color={color}
        buttonview={true}
        handleClick={handleClick}
      /> */
}

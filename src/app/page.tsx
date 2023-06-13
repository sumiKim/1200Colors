import Image from 'next/image';
import MainBanner from './components/MainBanner';
import TopImage from './public/home/1.jpg';
import BottomImage from './public/home/2.jpeg';
import Banner1 from './public/home/3.jpg';
import Banner2 from './public/home/4.jpeg';
import Banner3 from './public/home/5.jpeg';

export default function HomePage() {
  return (
    <div className='flex flex-col'>
      <div className='bg-pink-400 sm:bg-yellow-400 md:bg-green-600  lg:bg-blue-600 xl:bg-violet-900 2xl:bg-red-600 text-white'>
        반응형<br></br>
        2xl: 빨 <br></br>
        xl: 보<br></br>
        lg: 파 <br></br>
        md: 초 <br></br>
        sm: 노 <br></br>
        default: 분홍 <br></br>
      </div>
      <Image
        className='w-full h-screen object-cover'
        src={TopImage}
        alt='배경'
      />

      <div className='absolute left-5 bottom-20 md:left-20 md:bottom-20 lg:bottom-28 text-white'>
        <div className='text-brand text-2xl font-bold'>SAMHWA</div>

        <div className='text-3xl'>
          THE COLOR <br></br>
          COLLECTION <br></br>
          <br></br>
          <div className='text-[120px]'>1200</div>
        </div>
        <div className='absolute top-14 left-48 text-3xl ms-3'>+</div>
      </div>
      <section className='w-full flex flex-col sm:flex-row px-5 py-10 md:px-10 xl:px-32 2xl:px-64 sm:justify-between sm:items-center'>
        <div className='text-brand text-2xl sm:text-5xl md:text-6xl 2xl:text-7xl font-extrabold'>
          <p>STEADY</p>
          <p>& TRENDY</p>
        </div>
        <div className='flex flex-col text-sm sm:text-2xl md:text-3xl 2xl:text-4xl font-bold items-end'>
          <p>스테디 & 트랜디 컬러의</p>
          <p>풍부하고 섬세한 뉘앙스</p>
        </div>
      </section>
      <section className='px-5 md:px-10 xl:px-32 2xl:px-64 flex flex-col lg:flex-row bg-[#333333] text-white py-7'>
        <div className='basis-2/3'>
          <button className='bg-brand text-white px-5 py-5 text-lg sm:text-2xl'>
            About 삼화
          </button>
        </div>
        <div className='basis-1/3 pt-8'>
          <div>
            <p className='text-white text-base sm:text-sm md:text-base lg:text-sm xl:text-base 2xl:text-base font-thin'>
              삼화페인트는 페인트를 넘어 우리 생활을 이롭게 하는 <br></br>
              편의성, 안전함, 아름다움과 같은{' '}
              <span className='text-brand font-bold'>보이지 않는 가치</span>를
              <br></br>
              제공하기 위해 진화하고 발전해 왔습니다.
            </p>
          </div>
          <div className='flex gap-1 sm:gap-3 mt-10'>
            <button className='border-2 px-2 xl:px-5 py-3'>#편의성</button>
            <button className='border-2 px-2 xl:px-5 py-3'>#안전함</button>
            <button className='border-2 px-2 xl:px-5 py-3'>#아름다움</button>
          </div>
        </div>
      </section>
      <section className='flex px-5 md:px-10 xl:px-32 2xl:px-64 py-36 gap-5'>
        <MainBanner image={Banner1} title='컬러' link='/color' />
        <MainBanner image={Banner2} title='배색' link='/colorschema' />
        <MainBanner image={Banner3} title='공간' link='/place' />
      </section>
      <section className='flex flex-col md:flex-row xl:flex-col'>
        <div className='flex flex-col basis-1/2 xl:flex-row px-5 md:px-10 xl:px-32 2xl:px-64 pt-8 pb-10 bg-[#828282] text-white'>
          <div className='basis-1/3'>
            <p className='text-4xl md:text-5xl font-extrabold text-brand py-3 md:py-5'>
              About
            </p>
            <p className='text-xs md:text-md font-thin'>
              자사 컬러북인 &apos;SAMHWA-NCS COLLECTION&apos;
              <br></br>
              &apos;SAMHWA-NCS COLOR MASTER 950과 600&apos;
              <br></br>의 베스트 컬러, 시장수요가 많은 스테디 컬러를 <br></br>
              선별하고 각 분야의 트랜드가 반영된 신규컬러를 <br></br>
              추가하여 1200컬러로 구성하였습니다.
            </p>
          </div>
          <div className='basis-1/3 xl:border-x-2 xl:ps-5'>
            <p className='text-4xl md:text-5xl font-extrabold text-brand py-3 md:py-5'>
              New Color
            </p>
            <div className='text-xs md:text-md font-thin'>
              <div>
                신규컬러는 <span className='font-semibold'>풍부</span>
                하고 <span className='font-semibold'>섬세</span>한 단계의
                컬러구성을
              </div>
              <div>느낄 수 있으며 전문가와 일반소비자 모두가</div>
              <div>활용할 수 있는 컬러로 개발 되었습니다.</div>
            </div>
          </div>
          <div className='basis-1/3 xl:ps-5'>
            <p className='text-4xl md:text-5xl font-extrabold text-brand py-3 md:py-5'>
              1200+
            </p>
            <p className='text-xs md:text-md font-thin'>
              본 사이트로 온라인상에서<br></br>
              SAMHWA THE COLOR COLLECTION+1200의 <br></br>
              정확한 색채구현과 다양한 색채코드와 호환되는<br></br>
              정보를 확인할 수 있습니다.
            </p>
          </div>
        </div>
        <div className='basis-1/2 lg:block'>
          <Image
            className='w-full h-full object-cover'
            src={BottomImage}
            alt='배경'
          />
        </div>
      </section>
    </div>
  );
}

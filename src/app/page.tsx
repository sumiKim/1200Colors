import Image from 'next/image';
import MainBanner from './components/MainBanner';
import TopImage from './resource/image/1.jpg';
import BottomImage from './resource/image/2.png';
import Banner1 from './resource/image/3.jpg';
import Banner2 from './resource/image/4.jpg';
import Banner3 from './resource/image/5.jpg';
export default async function HomePage() {
  return (
    <div className='flex flex-col'>
      {/* <div className='sm:bg-yellow-400 md:bg-green-600  lg:bg-blue-600 xl:bg-violet-900 2xl:bg-red-600 text-white'>
        반응형<br></br>
        2xl: 빨 <br></br>
        xl: 보<br></br>
        lg: 파 <br></br>
        md: 초 <br></br>
        sm: 노 <br></br>
      </div> */}
      <Image
        className='w-full h-screen object-cover'
        src={TopImage}
        alt={'배경'}
      />
      <div className='absolute left-20 bottom-28 text-white'>
        <div className='text-brand text-lg'>SAMHWA</div>
        <div className='text-3xl'>
          THE COLOR <br></br>
          COLLECTION <br></br>
          <br></br>
          <div className='text-[120px]'>1200</div>
        </div>
        <div className='absolute top-12 left-48 text-3xl ms-1'>+</div>
      </div>
      <section className='flex px-10 xl:px-32 2xl:px-64'>
        <div className='text-brand text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-extrabold pt-10 pb-20'>
          <p>STEADY</p>
          <p>& TRENDY</p>
        </div>
        <div className='grow flex flex-col text-lg sm:text-2xl md:text-3xl 2xl:text-4xl font-bold pt-10 pb-20 items-end'>
          <p>컬러의 풍부하고</p>
          <p>섬세한 뉘앙스</p>
        </div>
      </section>
      <section className='px-10 xl:px-32 2xl:px-64 flex flex-col md:flex-row bg-[#333333] text-white py-7'>
        <div className='basis-1/3'>
          <button className='bg-brand text-white px-5 py-5 text-2xl'>
            About 삼화
          </button>
        </div>
        <div className='basis-2/3 pt-8 md:pt-24 md:ps-12'>
          <p className='text-white text-sm xl:text-xl 2xl:text-2xl font-thin'>
            삼화페인트는 페인트를 넘어 우리 생활을 이롭게 하는 <br></br> 편의성,
            안전함, 아름다움과 같은{' '}
            <span className='text-brand font-bold'>보이지 않는 가치</span>를
            제공하기 위해 진화하고 발전해 왔습니다.
          </p>
          <div className='flex gap-3 mt-10'>
            <button className='border-2 px-3 xl:px-10 py-3'>#편의성</button>
            <button className='border-2 px-3 xl:px-10 py-3'>#안전함</button>
            <button className='border-2 px-3 xl:px-10 py-3'>#아름다움</button>
          </div>
        </div>
      </section>
      <section className='flex px-10 xl:px-32 2xl:px-64 py-36 gap-5'>
        <MainBanner image={Banner1} title={'컬러'} link={'/color'} />
        <MainBanner image={Banner2} title={'배색'} link={'/colorschema'} />
        <MainBanner image={Banner3} title={'공간'} link={'/place'} />
      </section>
      <section className='flex flex-col md:flex-row xl:flex-col'>
        <div className='flex flex-col basis-1/2 xl:flex-row px-10 xl:px-32 2xl:px-64 pt-8 pb-10 bg-[#666666] text-white'>
          <div className='basis-1/3'>
            <p className='text-4xl md:text-5xl font-extrabold text-brand py-3 md:py-5'>
              About
            </p>
            <p className='text-xs md:text-md font-thin'>
              자사 컬러북인 'SAMHWA-NCS COLLECTION'
              <br></br>
              'SAMHWA-NCS COLOR MASTER 950'과 600'
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
                신규컬러는 <span className='font-semibold'>풍부</span>하고{' '}
                <span className='font-semibold'>섬세</span>한 단계의 컬러구성을
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
            alt={'배경'}
          />
        </div>
      </section>
    </div>
  );
}

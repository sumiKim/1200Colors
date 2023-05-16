import BlogIcon from './ui/icons/BlogIcon';
import CopyRightIcon from './ui/icons/CopyRightIcon';
import InstaIcon from './ui/icons/InstaIcon';
import YoutubeIcon from './ui/icons/YoutubeIcon';

export default function Footer() {
  return (
    <footer className='footer flex flex-col lg:flex-row'>
      <section className='flex flex-col pt-10 h-64 ps-6 lg:ps-64 lg:basis-2/3 text-black lg:text-white gap-6 bg-white lg:bg-black'>
        <p className='text-4xl text-brand font-semibold'>
          페인트를 넘어,<br></br>
          보이지 않는 가치를 위해.
        </p>
        <div className='flex flex-col'>
          <span>편의성</span>
          <span>안전함</span>
          <span>아름다움</span>
        </div>
      </section>
      <section className='flex flex-col ps-6 pt-10 h-64 lg:basis-1/3 text-samwha_textgray text-xs bg-black'>
        <div>
          <p>Technical Service Center</p>
          <p className='text-lg text-white font-semibold'>1544-5357</p>
          <p>삼화페인트공업(주)</p>
          <p>대표이사: 류기봉, 배맹달</p>
          <p>서울본사: 서울 종로구 돈화문로 58(묘동)</p>
          <p>안산공장: 경기도 안산시 단원구 별망로 178 (성곡동)</p>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <p className='flex flex-row gap-3'>
            <InstaIcon />
            <YoutubeIcon />
            <BlogIcon />
          </p>
          <div>
            <p className='flex flex-row items-center'>
              <span className='pr-1'>
                <CopyRightIcon />
              </span>
              2020 SAMWHA PAINTS INDUSTRIAL CO.LTD
            </p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

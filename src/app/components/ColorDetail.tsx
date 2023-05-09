import { Color } from '@/service/1200colors';
import BookmarkIcon from './ui/icons/BookmarkIcon';

export default function ColorDetail({
  color,
  buttonview,
  handleClick,
}: {
  color: Color;
  buttonview: boolean;
  handleClick: () => void;
}) {
  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      <div className='flex flex-row justify-between'>
        <BookmarkIcon />
        <button
          className={`bg-samwha-red text-white hover:brightness-110 rounded-md p-2 my-3 ${
            buttonview ? 'block' : 'hidden'
          } remove`}
          onClick={handleClick}
        >
          PDF로 다운로드
        </button>
      </div>
      <div id={`${color.samwha_code}`} className='flex flex-row'>
        <div
          id={`?_${color.samwha_code}`}
          className='basis-1/2 rounded-lg mx-2'
        ></div>
        <div className='basis-1/2 mx-2 flex flex-col'>
          <div className='basis-1/2'>
            <div className='flex flex-col'>
              <strong className='text-xl mb-2'>
                SH {`${color.samwha_code}`}
              </strong>
              <table className='text-left w-3/5'>
                <tbody>
                  <tr>
                    <th>HV/C</th>
                    <td className='text-slate-500'>{`${color.HVC_H} ${color.HVC_V}  /  ${color.HVC_C}`}</td>
                  </tr>
                  <tr>
                    <th>NCS</th>
                    <td className='text-slate-500'></td>
                  </tr>
                  <tr>
                    <th>Pantone</th>
                    <td className='text-slate-500'>{`${color.Pantone}`}</td>
                  </tr>
                  <tr>
                    <th>RGB</th>
                    <td className='text-slate-500'>{`${color.R} ${color.G} ${color.B}`}</td>
                  </tr>
                  <tr>
                    <th>CMYK</th>
                    <td className='text-slate-500'>{`${color.C} ${color.M} ${color.Y} ${color.K}`}</td>
                  </tr>
                  <tr>
                    <th>Lab</th>
                    <td className='text-slate-500'></td>
                  </tr>
                  <tr>
                    <th>HEX</th>
                    <td className='text-slate-500'>{`${color.HEX}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <strong className='text-xl mt-5 mb-2'>추천배색</strong>
      <div className='basis-1/2 h-full'>
        <div className='flex flex-row h-full'>
          <div className='basis-1/2'>
            <div className='flex flex-col w-56 h-56 mx-auto rounded-lg overflow-hidden'>
              <div className='bg-slate-300 basis-sh5.5'></div>
              <div className='bg-slate-900 basis-sh1.5'></div>
              <div className='bg-slate-500 basis-sh3.0'></div>
            </div>
          </div>
          <div className='basis-1/2 grid content-end'>
            {/*  */}
            <div className='flex mb-3'>
              <div className='bg-slate-300 w-8 h-8 m-1 my-auto'></div>
              <div>
                <p className='font-bold'>SH2001</p>
                <span>HV/C </span>
                <span>9.7Y 9.6/0.3</span>
              </div>
            </div>
            {/*  */}
            <div className='flex mb-3'>
              <div className='bg-slate-900 w-8 h-8 m-1 my-auto'></div>
              <div>
                <p className='font-bold'>SH2001</p>
                <span>HV/C </span>
                <span>9.7Y 9.6/0.3</span>
              </div>
            </div>
            {/*  */}
            <div className='flex'>
              <div className='bg-slate-500 w-8 h-8 m-1 my-auto'></div>
              <div>
                <p className='font-bold'>SH2001</p>
                <span>HV/C </span>
                <span>9.7Y 9.6/0.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

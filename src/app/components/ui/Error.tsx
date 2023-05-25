import WarningIcon from './icons/WarningIcon';

export default function Error() {
  return (
    <div className='w-full text-center mt-32'>
      <p className='flex justify-center'>
        <WarningIcon />
      </p>
      <p className='text-3xl font-bold my-5'>
        죄송합니다. <span>Internet Server Error</span>
      </p>
      <p>
        서비스 이용에 불편을 드려 죄송힙니다. <br></br>
        시스템 에러가 발생하여 페이지를 표시할 수 없습니다. <br></br>
        관리자에게 문의하시거나 잠시 후 다시 시도하세요.
      </p>
    </div>
  );
}

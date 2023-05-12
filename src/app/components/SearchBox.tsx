import Button from './ui/Button';

type Props = {
  dropdown?: boolean;
  placeholder?: string;
};
export default function SearchBox({ dropdown = true, placeholder }: Props) {
  return (
    <div className='flex flex-row w-full gap-1'>
      {/* dropdown */}
      {dropdown && (
        <div>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className='border-[1px] border-grey-100 text-black font-bold focus:outline-none rounded px-7 py-2.5 text-center inline-flex items-center justify-between'
            type='button'
          >
            색상명
            <svg
              className='w-4 h-4 ml-2'
              aria-hidden='true'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </button>
          <div
            id='dropdown'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownDefaultButton'
            >
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  색상이름
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  삼화코드
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  H V/C
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  NCS
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Pantone
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* search Box */}
      <input
        type='text'
        placeholder={placeholder}
        className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-samwha_lightgray'
      ></input>
      {!dropdown && (
        <div>
          <Button icon='search' border={false} />
        </div>
      )}
    </div>
  );
}

'use client';
import { useState } from 'react';
import { useSearchBox } from '../context/SearchBoxContext';
import Button from './ui/Button';
import { Menu } from '@/data/searchBox';

type Props = {
  dropdown?: boolean;
  menu?: Menu[];
  placeholder?: string;
};

export default function SearchBox({
  dropdown = true,
  menu,
  placeholder,
}: Props) {
  const { searchType, handleSearchType, handleSearchKeyword } = useSearchBox();

  const [open, setOpen] = useState(false);
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchGuide, setSearchGuide] = useState(
    placeholder ?? '색이름으로 검색해보세요.'
  );

  const handleClick = () => {
    setOpen(!open);
  };

  const changeSearchType = (type: Menu) => {
    handleSearchType(type.value);
    setSearchGuide(type.msg);
    setInputKeyword('');

    if (type.value === 'H V/C') {
    } else {
      setInputKeyword('');
    }

    setOpen(!open);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchKeyword(inputKeyword);
    }
  };

  return (
    <div className='flex flex-row w-full gap-1'>
      {/* dropdown */}
      {dropdown && (
        <div className='relative flex flex-col items-center'>
          <button
            id='dropdownDefaultButton'
            data-dropdown-toggle='dropdown'
            className='border-[1px] border-grey-100 text-black font-bold focus:outline-none rounded px-3 py-1.5 md:px-5 w-32 text-center inline-flex items-center justify-between active:border-black'
            type='button'
            onClick={handleClick}
          >
            {searchType === 'colorname'
              ? '색이름'
              : searchType === 'samhwa'
              ? '삼화코드'
              : searchType}
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
          {open && (
            <div
              id='dropdown'
              className={`absolute mt-10 w-full z-10 bg-white rounded-lg shadow`}
            >
              <ul
                className='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownDefaultButton'
              >
                {menu &&
                  menu.map(item => (
                    <li key={item.key}>
                      <a
                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                        onClick={() => changeSearchType(item)}
                      >
                        {item.value === 'colorname'
                          ? '색이름'
                          : item.value === 'samhwa'
                          ? '삼화코드'
                          : item.value}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* search Box */}
      {/* {searchType === 'samhwa' && (
        <>
          <div className='flex items-center text-lg text-[#9ba3af]'>SH - </div>
          <input
            type='text'
            placeholder={searchGuide}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
          ></input>
        </>
      )} */}
      {searchType !== 'H V/C' && (
        <input
          type='text'
          placeholder={searchGuide}
          className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
          value={inputKeyword}
          onChange={e => setInputKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
      )}
      {/* {searchType == 'H V/C' && (
        <>
          <input
            type='text'
            placeholder={'H'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={searchH}
            onChange={e => setSearchH(e.target.value)}
            onKeyDown={handleOnKeyPress}
          ></input>
          <input
            type='text'
            placeholder={'V'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={searchV}
            onChange={e => setSearchV(e.target.value)}
            onKeyDown={handleOnKeyPress}
          ></input>
          <div className='flex items-center text-3xl text-[#9ba3af]'>/</div>
          <input
            type='text'
            placeholder={'C'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={searchC}
            onChange={e => setSearchC(e.target.value)}
            onKeyDown={handleOnKeyPress}
          ></input>
        </>
      )} */}

      {!dropdown && (
        <div>
          <Button icon='search' border={false} />
        </div>
      )}
    </div>
  );
}

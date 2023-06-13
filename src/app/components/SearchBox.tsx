'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Button from './ui/Button';
import { Menu, SearchType } from '@/data/searchBox';
import { convertType, SearchValue } from '@/service/search';

type Props = {
  dropdown?: boolean;
  menu?: Menu[];
  placeholder?: string;
  reqSearch: Dispatch<SetStateAction<SearchValue>>;
};

type HVC = {
  H: string;
  V: string;
  C: string;
};

export default function SearchBox({
  dropdown = true,
  menu,
  placeholder,
  reqSearch,
}: Props) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<SearchType>('colorname');
  const [inputKeyword, setInputKeyword] = useState('');
  const [inputHVC, setInputHVC] = useState<HVC>({ H: '', V: '', C: '' });
  const [searchGuide, setSearchGuide] = useState(
    placeholder ?? '색이름으로 검색해보세요.'
  );

  const handleClick = () => {
    setOpen(!open);
  };

  const changeSearchType = (type: Menu) => {
    setSelectedType(type.value);
    setInputKeyword('');
    setInputHVC({ H: '', V: '', C: '' });
    setSearchGuide(type.msg);
    // initBadgeState(-1);
    setOpen(!open);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // initBadgeState(-1);
    if (e.key === 'Enter') {
      let searchKeyword = '';
      if (selectedType === 'H V/C') {
        searchKeyword = `${inputHVC.H}  ${inputHVC.V}/${inputHVC.C}`;
      }
      reqSearch({ searchType: selectedType, searchKeyword: inputKeyword });
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
            {convertType(selectedType)}
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
                        {convertType(item.value)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {selectedType !== 'H V/C' && (
        <input
          type='text'
          placeholder={searchGuide}
          className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
          value={inputKeyword}
          onChange={e => setInputKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
      )}
      {selectedType == 'H V/C' && (
        <>
          <input
            type='text'
            placeholder={'H'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={inputHVC.H}
            onChange={e => setInputHVC({ ...inputHVC, H: e.target.value })}
            onKeyDown={handleKeyDown}
          ></input>
          <input
            type='text'
            placeholder={'V'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={inputHVC.V}
            onChange={e => setInputHVC({ ...inputHVC, V: e.target.value })}
            onKeyDown={handleKeyDown}
          ></input>
          <div className='flex items-center text-3xl text-[#9ba3af]'>/</div>
          <input
            type='text'
            placeholder={'C'}
            className='border-[1px] border-grey-100 focus:outline-none rounded px-2 grow bg-[#EEEEEE]'
            value={inputHVC.C}
            onChange={e => setInputHVC({ ...inputHVC, C: e.target.value })}
            onKeyDown={handleKeyDown}
          ></input>
        </>
      )}

      {!dropdown && (
        <div>
          <Button icon='search' border={false} />
        </div>
      )}
    </div>
  );
}

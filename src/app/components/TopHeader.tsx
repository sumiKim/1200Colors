'use client';
import Image from 'next/image';
import Logo from '../res/image/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mainMenu = [
  {
    id: 'menu1',
    href: '/color',
    name: '컬러',
  },
  {
    id: 'menu2',
    href: '/colorschema',
    name: '배색',
  },
  {
    id: 'menu3',
    href: '/place',
    name: '공간',
  },
];

export default function TopHeader() {
  const pathName = usePathname();

  return (
    <header className='sticky top-0 z-50 flex flex-col lg:flex-row lg:px-24 bg-white border-b-2'>
      <Link href='/' className='flex items-center justify-center py-3'>
        <Image src={Logo} alt='logo' width={120} height={50} priority />
      </Link>
      <ul className='w-full flex justify-center items-center'>
        {mainMenu.map(item => (
          <li
            id={item.id}
            key={item.href}
            className={`flex flex-auto lg:flex-none justify-center px-8 py-3 text-lg 
              ${pathName === item.href ? 'font-bold' : 'text-samwha_textgray'}
              hover:text-black
              `}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className='w-[120px]'></div>
    </header>
  );
}

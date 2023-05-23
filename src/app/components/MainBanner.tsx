import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ArrowIcon from './ui/icons/ArrowIcon';

type Props = {
  image: StaticImageData;
  title: string;
  link: string;
};

export default function MainBanner({ image, title, link }: Props) {
  return (
    <div className='flex flex-col w-full'>
      <Link href={link}>
        <Image
          className='object-cover h-[500px] 2xl:h-[600px]'
          src={image}
          alt={title}
        />
        <div
          className='mt-5 p-2 xl:p-5 text-md xl:text-xl font-bold flex items-center gap-1'
          style={{ backgroundColor: '#c8c6c4' }}
        >
          {title}
          <div className='mt-1'>
            <ArrowIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}

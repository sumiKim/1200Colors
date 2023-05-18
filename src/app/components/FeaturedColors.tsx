import { getAll1200Colors } from '@/service/1200colors';
import ChipDefault from './ui/colorchips/ChipDefault';
import useSWR from 'swr';
import { Color } from '@/service/type';

export default function FeaturedColors() {
  const {
    data: colors,
    isLoading,
    error,
  } = useSWR<Color[]>(`http://localhos {t:3001/1200color/getAllColor`);

  return (
    <section className='w-fit p-1 bg-white'>
      <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit '>
        {colors &&
          colors.map(color => (
            <li key={color.samwha_code}>
              <ChipDefault color={color} />
            </li>
          ))}
      </ul>
    </section>
  );
}

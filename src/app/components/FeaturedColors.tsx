import { getAll1200Colors } from '@/service/1200colors';
import { getAllColors } from '@/service/colors';
import ColorChip from './ColorChip';

export default async function FeaturedColors() {
  // const colors = await getAllColors();

  const colors = await getAll1200Colors();
  // console.log('fea');
  // console.log(t[0]);

  return (
    <section className='w-fit p-1 bg-white'>
      <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit '>
        {colors.map(color => (
          <li key={color.samwha_code}>
            <ColorChip color={color} />
          </li>
        ))}
      </ul>
    </section>
  );
}

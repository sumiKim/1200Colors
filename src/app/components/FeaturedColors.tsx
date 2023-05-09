import { getAllColors } from '@/service/colors';
import ColorChip from './ColorChip';

export default async function FeaturedColors() {
  const colors = await getAllColors();
  return (
    <section className='w-fit p-1 bg-white'>
      <ul className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 text-center gap-2 p-2 w-fit '>
        {colors.map(color => (
          <li key={color.id}>
            <ColorChip color={color} />
          </li>
        ))}
      </ul>
    </section>
  );
}

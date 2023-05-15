import {
  getAllData,
  getColorSchemaToCsvSchema,
} from '@/service/1200colorschemas';
import { ColorSchema } from '@/service/type';
import ColorSchemaSquare from './ui/colorchips/ColorSchemaSquare';

export default async function FeaturedColorSchemas() {
  const colorschemas: ColorSchema[] = [];
  const allData = await getAllData();

  await Promise.all(
    allData.map(async data =>
      colorschemas.push(await getColorSchemaToCsvSchema(data))
    )
  );

  return (
    <section className='w-fit p-1 bg-white'>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-center gap-2 p-2 w-fit '>
        {colorschemas?.map(schema => (
          <li key={schema.id}>
            <ColorSchemaSquare schema={schema} size={'medium'} />
          </li>
        ))}
      </ul>
    </section>
  );
}

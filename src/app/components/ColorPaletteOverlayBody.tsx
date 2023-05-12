import { useSelectedColor } from '../context/SelectedColorContext';
import SearchBox from './SearchBox';
import ChipForOverlay from './ui/colorchips/ChipForOverlay';
import useSWR from 'swr';
import { Color } from '@/service/type';

type Props = {
  activeTab: string;
};

export default function ColorPaletteOverlayBody({ activeTab }: Props) {
  const { data: colors, isLoading, error } = useSWR<Color[]>(`/api/color`);
  const { selectedList } = useSelectedColor();

  return (
    <div className='absolute top-0 w-full h-full overflow-scroll px-1 pb-1'>
      {activeTab === 'Search' && (
        <>
          <div className='sticky top-0 py-2 bg-white'>
            <SearchBox
              dropdown={false}
              placeholder={'삼화 코드명을 검색해보세요'}
            />
          </div>

          {colors && (
            <ul className='flex flex-col'>
              {colors.map(color => (
                <li key={color.samwha_code}>
                  <ChipForOverlay color={color} />
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      {activeTab === 'MyColor' && (
        <ul className='flex flex-col'>
          {selectedList.map(color => (
            <li key={color.samwha_code}>
              <ChipForOverlay color={color} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

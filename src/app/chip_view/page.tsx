import { Color } from '@/service/type';
import ChipModalDetail from '../components/ui/colorchips/ChipModalDetail';
import ChipSimple from '../components/ui/colorchips/ChipSimple';
import ChipDefault from '../components/ui/colorchips/ChipDefault';
import ColorSchemaSquare from '../components/ui/colorchips/ColorSchemaSquare';
import ChipSchemaDetail from '../components/ui/colorchips/ChipSchemaDetail';
import ColorInfo from '../components/ColorInfo';
import ChipCustom from '../components/ui/colorchips/ChipCustom';

const samplecolor: Color = {
  id: 1,
  page_num: '1',
  samwha_code: '2085C',
  color_group: '1',
  munsell: '5.3PB 6.2/4.1',
  color: 'a',
  HVC_H: '5.3PB',
  HVC_V: '6.2',
  HVC_C: '4.1',
  R: 149,
  G: 156,
  B: 194,
  HEX: '959cc2',
  C: 48,
  M: 38,
  Y: 12,
  K: 0,
  'L*': '64',
  'a*': '-3',
  'b*': '-15',
  NCS: 'S 3020-R80B',
  Pantone: '16-4010 TPG',
};

const samplecolor2: Color = {
  id: 2,
  page_num: '2',
  samwha_code: '2006B',
  color_group: '2',
  munsell: '0.1Y 8.9/0.6',
  color: 'a',
  HVC_H: '0.1Y',
  HVC_V: '8.9',
  HVC_C: '0.6',
  R: 242,
  G: 235,
  B: 230,
  HEX: 'f2ebe6',
  C: 6,
  M: 9,
  Y: 10,
  K: 0,
  'L*': '91',
  'a*': '1',
  'b*': '5',
  NCS: 'S 1002-Y50R',
  Pantone: '11-0605 TPG',
};

const sampleschema = {
  id: '1',
  secondary: samplecolor,
  accent: samplecolor2,
  base: samplecolor,
};

export default function ChipViewPage() {
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipMobileDetail
          </span>
          <ChipModalDetail color={samplecolor} style={'simple'} />
        </div>
        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipMobileDetail
          </span>
          <ChipModalDetail color={samplecolor} style={'detail'} />
        </div>
      </div>
      {/* 
        1. chipDefault 없애기 (0)
        2. ChipLong & ChipMobie 합치기 사이즈 규정 -> Chip_simple (0)
        3. colorSchemaSqure 사이즈 규정
        4. chipMobileDetail -> Chip_popup
        */}
      <span className='text-xl font-extrabold  bg-pink-300'>
        ColorInfo-Popup
      </span>
      <ColorInfo color={samplecolor} type={'popup'} />
      <span className='text-xl font-extrabold  bg-pink-300'>
        ColorInfo-Color
      </span>
      <ColorInfo color={samplecolor} type={'color'} />
      <span className='text-xl font-extrabold  bg-pink-300'>
        ColorInfo-Schema
      </span>
      <ColorInfo color={samplecolor} type={'schema'} />
      <span className='text-xl font-extrabold  bg-pink-300'>
        ColorInfo-Simple
      </span>
      <ColorInfo color={samplecolor} type={'simple'} />
      <div className='flex flex-row gap-3'>
        <div className='border-b-4 border-black my-2 w-full'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipCustom
          </span>
          <ChipCustom color={samplecolor} />
        </div>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='border-b-4 border-black my-2 w-full'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipSchemaDetail ( Color Info 활용 )
          </span>
          <ChipSchemaDetail color={samplecolor} />
        </div>
        <div className='flex flex-row gap-3 w-[1000px]'>
          <div className='border-b-4 border-black my-2 w-full'>
            <span className='text-xl font-extrabold  bg-pink-300'>
              ColorInfo
            </span>
            <ColorInfo color={samplecolor} type={'color'} />
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipDefault
          </span>
          <ChipDefault color={samplecolor} />
        </div>

        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ColorSchemaSquare
          </span>
          <ColorSchemaSquare schema={sampleschema} size={'medium'} />
        </div>
      </div>

      <div className='flex flex-row gap-3'>
        <div className='border-b-4 border-black my-2 w-56'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipSimple1 : web
          </span>
          <ChipSimple color={samplecolor} type={'web'} />
        </div>
        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipSimple2 : mobile
          </span>
          <ChipSimple color={samplecolor} type={'mobile'} />
        </div>
        <div className='border-b-4 border-black my-2'>
          <span className='text-xl font-extrabold  bg-pink-300'>
            ChipSimple3 : simple
          </span>
          <ChipSimple color={samplecolor} type={'simple'} />
        </div>
      </div>
    </div>
  );
}

'use client';
import useSWR from 'swr';
import { config } from '../../util/config';
import NotFound from './not-found';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import DetailHeader from '@/app/components/DetailHeader';
import ColorSchemaSquare from '@/app/components/ui/colorchips/ColorSchemaSquare';
import ChipSchemaDetail from '@/app/components/ui/colorchips/ChipSchemaDetail';
import Button from '@/app/components/ui/Button';
import { ResSchema, Schema } from '@/service/type';
import Error from '@/app/components/ui/Error';

type Props = { params: { id: string } };

export default function ColorDetailPage({ params: { id } }: Props) {
  if (!id) {
    NotFound();
  }

  const { data, isLoading, error } = useSWR<ResSchema>(
    `${config.server.baseURL}/schema/${id}`
  );

  const schema = data?.result;

  const handleCustomColor = () => {
    window.location.href = `/customSchema/${id}`;
  };

  const handlePDFClick = () => {
    let doc = new jsPDF({ putOnlyUsedFonts: true, orientation: 'portrait' });

    // base
    autoTable(doc, {
      theme: 'grid',
      headStyles: {
        halign: 'center',
        fontSize: 25,
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      tableWidth: 'wrap',
      head: [[{ content: ``, colSpan: 3 }]],
      columnStyles: { 0: { halign: 'center', fillColor: schema?.base.HEX } },
      body: [
        [
          {
            content: [''],
            rowSpan: 8,
            styles: { halign: 'center', minCellWidth: 60, minCellHeight: 30 },
          },
          {
            content: 'Samwha Code',
            styles: { valign: 'middle' },
          },
          {
            content: `SH ${schema?.base.samwha_code}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'H V/C',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base.munsell}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'L*a*b*',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base['L*']} / ${schema?.base['a*']} / ${schema?.base['b*']}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'RGB',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base.R} / ${schema?.base.G} / ${schema?.base.B}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'CMYK',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base.C} / ${schema?.base.M} / ${schema?.base.Y} / ${schema?.base.K}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'HEX',
            styles: { valign: 'middle' },
          },
          {
            content: `#${schema?.base.HEX}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'NCS',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base.NCS}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'Pantone',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.base.Pantone}`,
            styles: { valign: 'middle' },
          },
        ],
      ],
    });

    // accent
    autoTable(doc, {
      theme: 'grid',
      headStyles: {
        halign: 'center',
        fontSize: 25,
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      tableWidth: 'wrap',
      head: [[{ content: ``, colSpan: 3 }]],
      columnStyles: { 0: { halign: 'center', fillColor: schema?.accent.HEX } },
      body: [
        [
          {
            content: [''],
            rowSpan: 8,
            styles: { halign: 'center', minCellWidth: 60, minCellHeight: 30 },
          },
          {
            content: 'Samwha Code',
            styles: { valign: 'middle' },
          },
          {
            content: `SH ${schema?.accent.samwha_code}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'H V/C',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent.munsell}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'L*a*b*',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent['L*']} / ${schema?.accent['a*']} / ${schema?.accent['b*']}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'RGB',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent.R} / ${schema?.accent.G} / ${schema?.accent.B}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'CMYK',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent.C} / ${schema?.accent.M} / ${schema?.accent.Y} / ${schema?.accent.K}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'HEX',
            styles: { valign: 'middle' },
          },
          {
            content: `#${schema?.accent.HEX}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'NCS',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent.NCS}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'Pantone',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.accent.Pantone}`,
            styles: { valign: 'middle' },
          },
        ],
      ],
    });

    // secondary
    autoTable(doc, {
      theme: 'grid',
      headStyles: {
        halign: 'center',
        fontSize: 25,
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
      },
      tableWidth: 'wrap',
      head: [[{ content: ``, colSpan: 3 }]],
      columnStyles: {
        0: { halign: 'center', fillColor: schema?.secondary.HEX },
      }, // Cells in first column centered and green
      body: [
        [
          {
            content: [''],
            rowSpan: 8,
            styles: { halign: 'center', minCellWidth: 60, minCellHeight: 30 },
          },
          {
            content: 'Samwha Code',
            styles: { valign: 'middle' },
          },
          {
            content: `SH ${schema?.secondary.samwha_code}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'H V/C',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary.munsell}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'L*a*b*',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary['L*']} / ${schema?.secondary['a*']} / ${schema?.secondary['b*']}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'RGB',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary.R} / ${schema?.secondary.G} / ${schema?.secondary.B}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'CMYK',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary.C} / ${schema?.secondary.M} / ${schema?.secondary.Y} / ${schema?.secondary.K}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'HEX',
            styles: { valign: 'middle' },
          },
          {
            content: `#${schema?.secondary.HEX}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'NCS',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary.NCS}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'Pantone',
            styles: { valign: 'middle' },
          },
          {
            content: `${schema?.secondary.Pantone}`,
            styles: { valign: 'middle' },
          },
        ],
      ],
    });
    doc.save(`배색_${id}`);
  };

  return (
    <section className='max-w-screen-lg mx-auto flex flex-col p-5'>
      {error && <Error />}
      {schema && (
        <>
          <DetailHeader title='배색' subtitle='배색정보' />
          <div className='mx-auto lg:w-full flex flex-col lg:flex-row gap-4'>
            <div className='basis-1/3'>
              <ColorSchemaSquare schema={schema} size={'large'} />
            </div>
            <div className='basis-2/3 flex flex-col justify-between'>
              <div className='flex justify-end gap-1'>
                <Button icon='pdf' handleClick={handlePDFClick} />
                <Button
                  icon='swatch'
                  description='Custom Color'
                  handleClick={handleCustomColor}
                />
              </div>
              <div className='flex flex-col gap-4'>
                <ChipSchemaDetail color={schema.base} />
                <ChipSchemaDetail color={schema.accent} />
                <ChipSchemaDetail color={schema.secondary} />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

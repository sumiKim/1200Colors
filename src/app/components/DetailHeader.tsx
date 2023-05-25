'use client';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useState } from 'react';
import { useSelectedColor } from '../context/SelectedColorContext';
import DivideIcon from './ui/icons/DivideIcon';
import HomeIcon from './ui/icons/HomeIcon';
import Button from './ui/Button';
import { Color } from '@/service/type';

type Props = {
  color?: Color;
  title: string;
  subtitle: string;
};
export default function DetailHeader({ color, title, subtitle }: Props) {
  const { selectedList, removeColor, insertColor } = useSelectedColor();

  const state =
    selectedList.find(select => select.samwha_code === color?.samwha_code) ===
    undefined
      ? false
      : true;

  const [selected, setSelected] = useState(state);

  const handleBookmarkClick = () => {
    if (!color) return;

    if (selected) {
      removeColor(color);
    } else {
      insertColor(color);
    }
    setSelected(!selected);
  };

  const handlePDFClick = () => {
    let doc = new jsPDF({ putOnlyUsedFonts: true, orientation: 'portrait' });

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
      columnStyles: { 0: { halign: 'center', fillColor: color?.HEX } },
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
            content: `SH ${color?.samwha_code}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'H V/C',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.munsell}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'L*a*b*',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.['L*']} / ${color?.['a*']} / ${color?.['b*']}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'RGB',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.R} / ${color?.G} / ${color?.B}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'CMYK',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.C} / ${color?.M} / ${color?.Y} / ${color?.K}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'HEX',
            styles: { valign: 'middle' },
          },
          {
            content: `#${color?.HEX}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'NCS',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.NCS}`,
            styles: { valign: 'middle' },
          },
        ],
        [
          {
            content: 'Pantone',
            styles: { valign: 'middle' },
          },
          {
            content: `${color?.Pantone}`,
            styles: { valign: 'middle' },
          },
        ],
      ],
    });

    doc.save(`SH_${color?.samwha_code}`);
  };

  return (
    <div className='flex flex-col py-2'>
      <div className='flex h-10 justify-between'>
        <div className='flex h-10 items-center text-sh_text64'>
          <HomeIcon />
          <DivideIcon />
          <span>{title}</span>
          <DivideIcon />
          <span className='text-sh_text64'>{subtitle}</span>
        </div>

        {color && (
          <div className='flex gap-1'>
            <Button icon={'pdf'} handleClick={handlePDFClick} />
            <Button
              icon={'bookmark'}
              selected={selected}
              handleClick={handleBookmarkClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

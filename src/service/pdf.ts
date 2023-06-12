import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Color, Schema } from '@/service/type';

let doc = new jsPDF({ putOnlyUsedFonts: true, orientation: 'portrait' });

export async function makeSchemaPDF(schema: Schema, filename: string) {
  makeColorInfo(schema.base);
  makeColorInfo(schema.accent);
  makeColorInfo(schema.secondary);

  doc.save(`배색_${filename}`);
}

export async function makeColorPDF(color: Color, filename: string) {
  makeColorInfo(color);
  doc.save(`SH_${filename}`);
}

function makeColorInfo(color: Color) {
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
      0: { halign: 'center', fillColor: color.HEX },
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
          content: `SH ${color.samwha_code}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'H V/C',
          styles: { valign: 'middle' },
        },
        {
          content: `${color.munsell}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'L*a*b*',
          styles: { valign: 'middle' },
        },
        {
          content: `${color['L*']} / ${color['a*']} / ${color['b*']}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'RGB',
          styles: { valign: 'middle' },
        },
        {
          content: `${color.R} / ${color.G} / ${color.B}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'CMYK',
          styles: { valign: 'middle' },
        },
        {
          content: `${color.C} / ${color.M} / ${color.Y} / ${color.K}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'HEX',
          styles: { valign: 'middle' },
        },
        {
          content: `#${color.HEX}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'NCS',
          styles: { valign: 'middle' },
        },
        {
          content: `${color.NCS}`,
          styles: { valign: 'middle' },
        },
      ],
      [
        {
          content: 'Pantone',
          styles: { valign: 'middle' },
        },
        {
          content: `${color.Pantone}`,
          styles: { valign: 'middle' },
        },
      ],
    ],
  });
}

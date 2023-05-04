import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
const noto_sans = Noto_Sans_KR({ weight: ['400', '500', '700'] });

export const metadata = {
  title: '1200_colors',
  description: 'Samwha The Color Collection+',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}

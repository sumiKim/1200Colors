import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import TopHeader from './components/TopHeader';
import SelectedColorProvider from './context/SelectedColorContext';
import SWRConfigContext from './context/SWRConfigContext';

const noto_sans = Noto_Sans_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

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
    <html lang='en' className={noto_sans.className}>
      <body className='h-full' suppressHydrationWarning={true}>
        <TopHeader />
        <SelectedColorProvider>
          <SWRConfigContext>{children}</SWRConfigContext>
        </SelectedColorProvider>
        <div id='portal' />
      </body>
    </html>
  );
}

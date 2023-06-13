import MyColorBottom from '../components/MyColorBottom';
import MyColorLeft from '../components/MyColorLeft';

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MyColorLeft />
      {children}
      <MyColorBottom />
    </>
  );
}

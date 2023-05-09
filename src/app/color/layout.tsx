import MyColorBottom from '../components/MyColorBottom';
import MyColorLeft from '../components/MyColorLeft';
import PageTitle from '../components/PageTitle';

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageTitle titleName='컬러' badgeView={true} />
      <MyColorLeft />
      {children}
      <MyColorBottom />
    </>
  );
}

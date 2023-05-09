import MyColorLeft from '../components/MyColorLeft';
import PageTitle from '../components/PageTitle';

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageTitle titleName='배색' badgeView={false} />
      <MyColorLeft />
      {children}
    </>
  );
}

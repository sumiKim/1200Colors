import MyColorBottom from '../components/MyColorBottom';
import MyColorLeft from '../components/MyColorLeft';
import PageTitle from '../components/PageTitle';
import SearchBoxProvider from '../context/SearchBoxContext';

export default function ColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SearchBoxProvider>
        <PageTitle titleName='배색' badgeView={false} />
        <MyColorLeft />
        {children}
        <MyColorBottom />
      </SearchBoxProvider>
    </>
  );
}

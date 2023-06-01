import CustomPlaceProvider from '@/app/context/CustomPlaceContext';

export default function PlaceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomPlaceProvider>{children}</CustomPlaceProvider>;
}

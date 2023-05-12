import CustomSchemaProvider from '@/app/context/CustomSchemaContext';

export default function CustomSchemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CustomSchemaProvider>{children}</CustomSchemaProvider>;
}

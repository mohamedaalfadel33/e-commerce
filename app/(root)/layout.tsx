import Navbar from '@/components/shared/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex ">
      <Navbar />
      {children}
    </div>
  );
}

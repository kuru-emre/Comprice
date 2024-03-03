import { Footer } from 'components/footer';
import { Navbar } from 'components/navbar';
import { BottomNavbar } from 'components/bottom-navbar';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <Navbar />
      <BottomNavbar />
      <main className='lg:pt-8'>{children}</main>
      <Footer />
    </div>
  );
}

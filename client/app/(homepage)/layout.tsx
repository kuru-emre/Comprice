import FooterDemo from '@/components/footer';
import { Logo } from '@/components/logo';
import { Navbar } from '@/components/navbar';
import { Profile } from '@/components/profile';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header className="flex w-full justify-between border-b p-4">
        <div className="flex w-[300px] items-center">
          <Logo />
        </div>
        <Navbar />
        <div className="flex w-[300px] justify-end gap-3">
          <Profile />
          <ThemeSwitcher />
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full border-t-2">
        <FooterDemo />
      </footer>
    </div>
  );
}

import { Navbar } from '@/components/navbar';
import { Profile } from '@/components/profile';
import { ThemeSwitcher } from '@/components/theme-switcher';

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header className="flex w-full justify-between border-b p-3">
        <div className="w-[200px]">
          <ThemeSwitcher />
        </div>
        <Navbar />
        <div className="w-[200px]">
          <Profile />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

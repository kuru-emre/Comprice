import { Footer, Header } from "components"

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

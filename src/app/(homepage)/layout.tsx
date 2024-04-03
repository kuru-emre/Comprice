import { Footer, Header } from "components"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Global demand and supplies',
}

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

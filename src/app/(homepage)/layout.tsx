import { Footer, Header } from "components"
import { Metadata } from "next";
import { Box } from "@mantine/core"

export const metadata: Metadata = {
  title: 'Marketplace',
  description: 'Global demand and supplies',
}

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}

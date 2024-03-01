export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="overflow-hidden">{children}</main>;
}

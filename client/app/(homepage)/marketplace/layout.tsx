import localFont from 'next/font/local';

const lastica = localFont({ src: './../../assets/fonts/lastica.ttf' });


export default function MarketplaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    
    return (
        <div className="w-full">
            <section className="p-20 border-b-2  bg-[url(https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover">
                <h1 className={`text-2xl text-white tracking-widest text-center lg:text-4xl ${lastica.className}`}>Marketplace</h1>
            </section>
            <section>
                {children}
            </section>
        </div>
    );
}

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Button, HeroParallax } from 'ui';
import Link from 'next/link';
import localFont from 'next/font/local';
import { categories } from 'assets/hero-parallax-images';

const lastica = localFont({ src: './../assets/fonts/lastica.ttf' });

export default function Home() {
  return (
    <>
      {/* Start Main Hero */}
      <section className="w-scren align-center relative flex h-[400px] justify-center border-b-2 md:h-[600px] lg:h-[400px] ">
        <div className="flex h-full w-8/12 flex-col items-center justify-center p-4 text-white">
          <h1 className={`text-4xl tracking-widest lg:text-6xl ${lastica.className}`}>Comprice</h1>
          <h2 className={`m-3 text-xl tracking-widest lg:text-2xl  ${lastica.className}`}>Worldwide Trade</h2>
        </div>
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          className="absolute top-0 -z-10 h-full w-full object-cover brightness-50"
        />
        <Card className="absolute -bottom-24 z-10 w-[90%] lg:w-1/3 shadow-xl">
          <CardHeader>
            <CardTitle>Let&apos;s get started quickly</CardTitle>
            <CardDescription>Search your desired item</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex w-full items-center gap-2">
                <Input id="name" placeholder="Name of your project" />
                <Link href="/marketplace">
                  <Button>Search</Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      {/* End Main Hero */}

      <section className="relative flex w-full flex-col bg-grid-black/[0.2] dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        {/* Start Hero Parallax */}
        <section className="w-full">
          <HeroParallax products={categories} />
        </section>
        <section className="h-[500px] w-full">
          <h2 className="text-2xl font-bold dark:text-white md:text-7xl">
            Comprices <br /> more than 70 sectors
          </h2>
          <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
            We build beautiful products with the latest technologies and frameworks. We are a team of passionate
            developers and designers that love to build amazing products.
          </p>
        </section>
        {/* End Hero Parallax */}
        
        {/* Start Info */}
        <section className="w-full p-4">
          <div className="flex w-full gap-4">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </section>
    </>
  );
}

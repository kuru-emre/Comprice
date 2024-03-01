'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Button } from '@/components/ui';

import Link from 'next/link';
import localFont from 'next/font/local';

const lastica = localFont({ src: './../fonts/lastica.ttf' });

export default function Home() {
  return (
    <>
      <section className="w-scren align-center relative flex h-[400px] justify-center overflow-hidden md:h-[600px] lg:h-[400px] ">
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
      </section>
      <section className="relative flex h-[120px] w-full justify-center overflow-visible">
        <Card className="absolute bottom-1 w-1/3">
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
    </>
  );
}

'use client';

import { MarketplaceLayoutType } from 'types';
import { Tabs } from 'ui';
import { LasticaFont } from 'lib';

export default function MarketplaceLayout({ children, demands, supplies, posts }: MarketplaceLayoutType) {
  return (
    <div className="w-full">
      <section className="border-b-2 bg-[url(https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-cover p-20">
        <h1 className={`text-center text-2xl tracking-widest text-white lg:text-4xl ${LasticaFont.className}`}>Marketplace</h1>
      </section>
      <section className="flex">
        <aside className="h-[500px] w-1/4">{children}</aside>
        <div className="h-[20rem] w-3/4">
          <Tabs
            tabs={[
              {
                title: 'Supplies',
                value: 'supplies',
                content: supplies
              },
              {
                title: 'Demands',
                value: 'demands',
                content: demands
              },
              {
                title: 'Your Postings',
                value: 'posts',
                content: posts
              }
            ]}
          />
        </div>
      </section>
    </div>
  );
}

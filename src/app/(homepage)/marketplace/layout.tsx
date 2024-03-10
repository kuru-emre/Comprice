'use client';

import { TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import { MarketplaceLayoutType } from 'types';
import { Tabs } from 'ui';

export default function MarketplaceLayout({ children, demands, supplies, posts }: MarketplaceLayoutType) {
  return (
    <div className="w-full">
      {children}
      <section className="m-auto flex h-full lg:w-[80%]">
        <div className="w-full lg:h-[1000px]">
          <Tabs defaultValue="supplies" className="relative w-full max-sm:p-4">
            <TabsList className="grid grid-cols-3 lg:absolute lg:left-3 lg:top-8 lg:w-[450px]">
              <TabsTrigger value="supplies">Supplies</TabsTrigger>
              <TabsTrigger value="demands">Demands</TabsTrigger>
              <TabsTrigger value="posts">My Postings</TabsTrigger>
            </TabsList>

            <div className="flex w-full flex-col px-2 lg:h-[1000px] lg:flex-row">
              <div className="h-full w-full lg:mx-4 lg:w-[450px] lg:border-r-2 lg:pt-20">sadasd</div>
              <div className="h-full flex-grow ">
                <TabsContent value="supplies">{supplies}</TabsContent>
                <TabsContent value="demands">{demands}</TabsContent>
                <TabsContent value="posts">{posts}</TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

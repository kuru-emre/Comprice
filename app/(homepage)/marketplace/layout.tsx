'use client';

import { TabsContent, TabsList, TabsTrigger } from 'components/ui/tabs';
import { MarketplaceLayoutType } from 'types';
import { Tabs } from 'ui';

export default function MarketplaceLayout({ children, demands, supplies, posts }: MarketplaceLayoutType) {
  return (
    <div className="w-full">
      {children}
      <section className="flex h-full lg:w-[80%] m-auto">
        <div className="lg:h-[1000px] w-full">
          <Tabs defaultValue="supplies" className="w-full relative max-sm:p-4">
            <TabsList className="grid lg:w-[450px] grid-cols-3 lg:absolute lg:top-8 lg:left-3">
              <TabsTrigger value="supplies">Supplies</TabsTrigger>
              <TabsTrigger value="demands">Demands</TabsTrigger>
              <TabsTrigger value="posts">My Postings</TabsTrigger>
            </TabsList>

            <div className="flex flex-col lg:flex-row lg:h-[1000px] w-full px-2">
              <div className="w-full lg:w-[450px] h-full lg:border-r-2 lg:mx-4 lg:pt-20">sadasd</div>
              <div className="flex-grow h-full ">
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

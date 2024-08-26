import Image from 'next/image';
import { Squares2X2Icon } from '@heroicons/react/20/solid';
import { MobileFilterButton, MobileFilterComponent, VisibilityProvider } from '@/components/marketplace/Filters/MobileFilter';
import SorterComponent from '@/components/marketplace/Sorter';
import SideFilterComponent from '@/components/marketplace/Filters/SideFilter';

export default function MarketplaceLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="marketplace"
          fill={true}
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-gray-900" aria-hidden="true"></div>
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-32">
          <h1 className="text-center font-lastica text-3xl font-light tracking-widest text-white sm:text-3xl lg:text-5xl">Marketplace</h1>
        </div>
      </div>
      <div>
        <VisibilityProvider>
          <MobileFilterComponent />
          <main className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-700 py-6">
              <h1 className="font-lastica text-lg font-normal tracking-widest lg:text-2xl">Companies</h1>
              <div className="flex items-center">
                <SorterComponent />
                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
                </button>
                <MobileFilterButton />
              </div>
            </div>
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <SideFilterComponent />
                <div className="lg:col-span-3">{children}</div>
              </div>
            </section>
          </main>
        </VisibilityProvider>
      </div>
    </div>
  );
}

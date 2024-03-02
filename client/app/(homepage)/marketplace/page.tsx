'use client';

import { Tabs } from 'ui';

const tabs = [
  {
    title: 'Product',
    value: 'product',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-secondary p-10 text-xl font-bold md:text-4xl">
        <p>Product Tab</p>
      </div>
    )
  },
  {
    title: 'Services',
    value: 'services',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-secondary p-10 text-xl font-bold md:text-4xl">
        <p>Services tab</p>
      </div>
    )
  },
  {
    title: 'Playground',
    value: 'playground',
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-secondary p-10 text-xl font-bold md:text-4xl">
        <p>Playground tab</p>
      </div>
    )
  }
];

export default function Marketplace() {
  return (
    <div className="flex h-[20rem] w-1/2 max-w-5xl flex-col items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}

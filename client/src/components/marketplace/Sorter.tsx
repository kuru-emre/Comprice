import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const OPTIONS = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SorterComponent() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-400 hover:text-gray-500">
          Sort
          <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {OPTIONS.map((option) => (
            <MenuItem key={option.name}>
              <a
                href={option.href}
                className={classNames(
                  option.current ? 'font-medium text-violet-600' : 'text-gray-200',
                  'block px-4 py-2 text-sm data-[focus]:bg-gray-700'
                )}
              >
                {option.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

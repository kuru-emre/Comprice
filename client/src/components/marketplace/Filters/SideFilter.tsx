import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FILTERS, SUBCATEGORIES } from './filters';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default function SideFilterComponent() {
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul role="list" className="space-y-4 border-b border-gray-700 pb-6 text-sm font-medium">
        {SUBCATEGORIES.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>

      {FILTERS.map((section) => (
        <Disclosure key={section.id} as="div" className="border-b border-gray-700 py-6">
          <h3 className="-my-3 flow-root">
            <DisclosureButton className="group flex w-full items-center justify-between py-3 text-sm hover:text-violet-600">
              <span className="font-medium">{section.name}</span>
              <span className="ml-6 flex items-center">
                <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
              </span>
            </DisclosureButton>
          </h3>
          <DisclosurePanel transition className="pt-6 duration-300 ease-in-out data-[closed]:translate-y-full">
            <div className="space-y-4">
              {section.options.map((option, optionIdx) => (
                <div key={option.value} className="flex items-center">
                  <input
                    defaultValue={option.value}
                    defaultChecked={option.checked}
                    id={`filter-${section.id}-${optionIdx}`}
                    name={`${section.id}[]`}
                    type="checkbox"
                    className="h-4 w-4 rounded-full border-gray-300 text-violet-600 focus:ring-violet-500"
                  />
                  <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </form>
  );
}

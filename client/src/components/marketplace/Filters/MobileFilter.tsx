'use client';

import { FunnelIcon, XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { createContext, useContext, useState, ReactNode } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FILTERS, SUBCATEGORIES } from './filters';

// Define the shape of the context
interface VisibilityContextType {
  isVisible: boolean;
  toggleVisibility: () => void;
}

// Create the context with a default value
const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export function VisibilityProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>{children}</VisibilityContext.Provider>;
}

export function useVisibility() {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
}

export function MobileFilterButton() {
  const { toggleVisibility } = useVisibility();

  return (
    <button type="button" onClick={toggleVisibility} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
      <span className="sr-only">Filters</span>
      <FunnelIcon aria-hidden="true" className="h-5 w-5" />
    </button>
  );
}

export function MobileFilterComponent() {
  const { isVisible, toggleVisibility } = useVisibility();

  return (
    <Dialog open={isVisible} onClose={toggleVisibility} className="relative z-40 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-gray-900 py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium">Filters</h2>
            <button type="button" onClick={toggleVisibility} className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Filters */}
          <form className="mt-4 border-t border-gray-700">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium">
              {SUBCATEGORIES.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="block px-2 py-3">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>

            {FILTERS.map((section) => (
              <Disclosure key={section.id} as="div" className="border-t border-gray-700 px-4 py-6">
                <h3 className="-mx-2 -my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between px-2 py-3 hover:text-violet-600">
                    <span className="font-medium">{section.name}</span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="pt-6">
                  <div className="space-y-6">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          defaultValue={option.value}
                          defaultChecked={option.checked}
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          type="checkbox"
                          className="h-4 w-4 rounded-full border-gray-300 text-violet-600 focus:ring-indigo-500"
                        />
                        <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="ml-3 min-w-0 flex-1">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

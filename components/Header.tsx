import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export const Header = () => {
  return (
    <Popover className="sticky top-0 left-0 bg-white shadow-sm z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 space-x-4">
              <div className="flex justify-start flex-1">
                <Link href="/" passHref>
                  <a className="text-xl font-black">
                    <span className="sr-only">Hirepartners logo</span>
                    {/* <img
                      className="h-8 w-auto sm:h-10"
                      src=""
                      alt=""
                    /> */}
                    Logo
                  </a>
                </Link>
              </div>
              <nav className="hidden lg:flex space-x-8">
                <Link href="/#paslaugos" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Paslaugos
                  </a>
                </Link>
                <Link href="/#kodel-mes" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Kodėl mes?
                  </a>
                </Link>
                <Link href="/darbo-pasiulymai" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Darbo pasiūlymai
                  </a>
                </Link>
                <Link href="/blogas" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Blogas
                  </a>
                </Link>
                <Link href="/#apie-mus" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Apie mus
                  </a>
                </Link>
                <Link href="/#komanda" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-indigo-500">
                    Komanda
                  </a>
                </Link>
              </nav>
              <div className="flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/kontaktai" passHref>
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Susisiekti
                  </a>
                </Link>
              </div>
              <div className="lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-3 pb-2 px-5">
                  <div className="flex items-center">
                    <div className="flex justify-start flex-1">
                      <Link href="/" passHref>
                        <a className="text-xl font-black">
                          <span className="sr-only">Hirepartners logo</span>
                          {/* <img
                      className="h-8 w-auto sm:h-10"
                      src=""
                      alt=""
                    /> */}
                          Logo
                        </a>
                      </Link>
                    </div>
                    <div className="ml-auto">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-300">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 flex sm:justify-between flex-col sm:flex-row">
                  <Link href="/#paslaugos" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Paslaugos
                    </a>
                  </Link>
                  <Link href="/#kodel-mes" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Kodėl mes?
                    </a>
                  </Link>
                  <Link href="/darbo-pasiulymai" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Darbo pasiūlymai
                    </a>
                  </Link>
                  <Link href="/blogas" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Blogas
                    </a>
                  </Link>
                  <Link href="/#apie-mus" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Apie mus
                    </a>
                  </Link>
                  <Link href="/#komanda" passHref>
                    <a className="text-base font-medium text-gray-600 hover:text-indigo-500 mb-2">
                      Komanda
                    </a>
                  </Link>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

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
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="hirepartners-logo.svg"
                      alt="Hirepartners logo"
                    />
                  </a>
                </Link>
              </div>
              <nav className="hidden lg:flex space-x-5 xl:space-x-8">
                <Link href="/#paslaugos" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Paslaugos
                  </a>
                </Link>
                <Link href="/#kodel-mes" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Kodėl mes?
                  </a>
                </Link>
                <Link href="/darbo-pasiulymai" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Darbo pasiūlymai
                  </a>
                </Link>
                {/* <Link href="/blogas" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Blogas
                  </a>
                </Link> */}
                <Link href="/#apie-mus" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Apie mus
                  </a>
                </Link>
                <Link href="/#komanda" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Komanda
                  </a>
                </Link>
              </nav>
              <div className="flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/kontaktai" passHref>
                  <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-pink-dark hover:opacity-95 transition-opacity">
                    Susisiekti
                  </a>
                </Link>
              </div>
              <div className="lg:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-dark hover:bg-pink-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-dark">
                  <span className="sr-only">Atidaryti meniu</span>
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
              static
              className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-3 pb-2 px-5">
                  <div className="flex items-center">
                    <div className="flex justify-start flex-1">
                      <Popover.Button as="div">
                        <Link href="/" passHref>
                          <a>
                            <span className="sr-only">Hirepartners logo</span>
                            <img
                              className="h-8 w-auto sm:h-10"
                              src="hirepartners-logo.svg"
                              alt="Hirepartners logo"
                            />
                          </a>
                        </Link>
                      </Popover.Button>
                    </div>
                    <div className="ml-auto">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-dark hover:bg-pink-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-dark">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 flex items-start sm:justify-between flex-col sm:flex-row">
                  <Popover.Button as="div" className="mb-1">
                    <Link href="/#paslaugos" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Paslaugos
                      </a>
                    </Link>
                  </Popover.Button>
                  <Popover.Button as="div" className="mb-1">
                    <Link href="/#kodel-mes" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Kodėl mes?
                      </a>
                    </Link>
                  </Popover.Button>
                  <Popover.Button as="div" className="mb-1">
                    <Link href="/darbo-pasiulymai" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Darbo pasiūlymai
                      </a>
                    </Link>
                  </Popover.Button>
                  {/* <Popover.Button as="div" className="mb-1">
                    <Link href="/blogas" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Blogas
                      </a>
                    </Link>
                  </Popover.Button> */}
                  <Popover.Button as="div" className="mb-1">
                    <Link href="/#apie-mus" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Apie mus
                      </a>
                    </Link>
                  </Popover.Button>
                  <Popover.Button as="div">
                    <Link href="/#komanda" passHref>
                      <a className="text-base font-medium text-gray-600 hover:text-pink">
                        Komanda
                      </a>
                    </Link>
                  </Popover.Button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

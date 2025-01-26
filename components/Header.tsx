'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NavLink } from 'components';

import {
  Popover,
  CloseButton,
  Transition,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export const Header = ({ lang = 'lt' }) => {
  return (
    <Popover className="sticky top-0 left-0 bg-white shadow-sm z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-4 space-x-4">
              <div className="flex justify-start flex-1">
                <Link
                  href={lang === 'lt' ? '/' : '/en'}
                  className="text-xl font-black"
                >
                  <span className="sr-only">Hirepartners logo</span>
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/hirepartners-logo.svg"
                    alt="Hirepartners logo"
                  />
                </Link>
              </div>
              <nav className="hidden lg:flex space-x-5 xl:space-x-8">
                <NavLink
                  href={lang === 'lt' ? '/#paslaugos' : '/en#services'}
                  className="text-base font-medium text-gray-600 hover:text-pink"
                >
                  {lang === 'lt' ? 'Paslaugos' : 'Services'}
                </NavLink>
                <NavLink
                  href={lang === 'lt' ? '/#kodel-mes' : '/en#why-us'}
                  className="text-base font-medium text-gray-600 hover:text-pink"
                >
                  {lang === 'lt' ? 'Kodėl mes?' : 'Why us?'}
                </NavLink>
                <NavLink
                  href={lang === 'lt' ? '/darbo-pasiulymai' : '/en/jobs'}
                  className="text-base font-medium text-gray-600 hover:text-pink"
                >
                  {lang === 'lt' ? 'Darbo pasiūlymai' : 'Jobs'}
                </NavLink>
                {/* <NavLink href="/blogas" passHref>
                  <a className="text-base font-medium text-gray-600 hover:text-pink">
                    Blogas
                  </a>
                </NavLink> */}
                <NavLink
                  href={lang === 'lt' ? '/#apie-mus' : '/en#about-us'}
                  className="text-base font-medium text-gray-600 hover:text-pink"
                >
                  {lang === 'lt' ? 'Apie mus' : 'About us'}
                </NavLink>
                <NavLink
                  href={lang === 'lt' ? '/#komanda' : '/en#team'}
                  className="text-base font-medium text-gray-600 hover:text-pink"
                >
                  {lang === 'lt' ? 'Komanda' : 'Team'}
                </NavLink>
              </nav>
              <div className="flex items-center justify-end md:flex-1 lg:w-0">
                <Link
                  href={lang === 'lt' ? '/kontaktai' : '/en/contact'}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-md text-base font-medium text-white bg-pink-dark hover:opacity-95 transition-opacity"
                >
                  {lang === 'lt' ? 'Susisiekti' : 'Contact'}
                </Link>
              </div>
              <div className="lg:hidden">
                <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-dark hover:bg-pink-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-dark">
                  <span className="sr-only">
                    {lang === 'lt' ? 'Atidaryti meniu' : 'Open menu'}
                  </span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
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
            <PopoverPanel
              static
              className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-3 pb-2 px-5">
                  <div className="flex items-center">
                    <div className="flex justify-start flex-1">
                      <CloseButton as="div">
                        <Link href={lang === 'lt' ? '/' : '/en'}>
                          <span className="sr-only">Hirepartners logo</span>
                          <img
                            className="h-8 w-auto sm:h-10"
                            src="/hirepartners-logo.svg"
                            alt="Hirepartners logo"
                          />
                        </Link>
                      </CloseButton>
                    </div>
                    <div className="ml-auto">
                      <CloseButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-pink-dark hover:bg-pink-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-dark">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </CloseButton>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 flex items-start sm:justify-between flex-col sm:flex-row">
                  <CloseButton
                    as={NavLink}
                    href={lang === 'lt' ? '/#paslaugos' : '/en#services'}
                    className="mb-1 text-base font-medium text-gray-600 hover:text-pink"
                  >
                    {lang === 'lt' ? 'Paslaugos' : 'Services'}
                  </CloseButton>
                  <CloseButton
                    as={NavLink}
                    href={lang === 'lt' ? '/#kodel-mes' : '/en#why-us'}
                    className="mb-1 text-base font-medium text-gray-600 hover:text-pink"
                  >
                    {lang === 'lt' ? 'Kodėl mes?' : 'Why us?'}
                  </CloseButton>
                  <CloseButton
                    as={NavLink}
                    href={lang === 'lt' ? '/darbo-pasiulymai' : '/en/jobs'}
                    className="mb-1 text-base font-medium text-gray-600 hover:text-pink"
                  >
                    {lang === 'lt' ? 'Darbo pasiūlymai' : 'Jobs'}
                  </CloseButton>
                  <CloseButton
                    as={NavLink}
                    href={lang === 'lt' ? '/#apie-mus' : '/en#about-us'}
                    className="mb-1 text-base font-medium text-gray-600 hover:text-pink"
                  >
                    {lang === 'lt' ? 'Apie mus' : 'About us'}
                  </CloseButton>
                  <CloseButton
                    as={NavLink}
                    href={lang === 'lt' ? '/#komanda' : '/en#team'}
                    className="text-base font-medium text-gray-600 hover:text-pink"
                  >
                    {lang === 'lt' ? 'Komanda' : 'Team'}
                  </CloseButton>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

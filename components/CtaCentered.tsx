import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/outline';

export const CtaCentered = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Reikia pagalbos talentų paieškose?</span>
          <Link href="/kontaktai" passHref>
            <a className="inline-block text-pink cursor-pointer hover:underline">
              Susisiekite su mumis
              <ArrowRightIcon className="ml-2 w-6 h-6 inline-block font-semibold" />
            </a>
          </Link>
        </h2>
      </div>
    </div>
  );
};

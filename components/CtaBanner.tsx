import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

import { ExternalLinkIcon } from '@heroicons/react/solid';

export const CtaBanner = ({ lang = 'lt' }) => {
  return (
    <div className="relative bg-pink-dark">
      <div className="h-56 sm:h-72 relative md:absolute md:left-0 md:h-full md:w-1/2">
        <Image
          src="/cta-image-opt.jpg"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt="Hirepartners komanda su kompiuteriais"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-pink">
            Darbo pasiūlymai
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Nuolat atnaujinamas darbų sąrašas
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <Link
                href={lang === 'en' ? '/en/jobs' : '/darbo-pasiulymai'}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-darkest bg-white hover:text-pink transition-colors"
              >
                Pasiūlymų sąrašas
                <ExternalLinkIcon className="-mr-1 ml-3 h-5 w-5 text-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

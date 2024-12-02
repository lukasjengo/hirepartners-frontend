import React from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';

export const Hero = ({ lang = 'lt' }) => {
  return (
    <div className="flex flex-col lg:flex-row text-center lg:text-left screenheight-nonav">
      <div className="flex flex-col w-full lg:w-1/2 mx-auto my-10 sm:max-w-xl justify-center px-4">
        <h1 className="tracking-tight font-extrabold text-pink-dark text-5xl lg:text-6xl">
          <span className="block">Mes esame</span>{' '}
          <span className="block text-pink">Hire Partners</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 sm:text-xl md:mt-8">
          Padedame surasti talentus įmonėms, kurios neturi vidinio HR, laiko, ar
          ieško žmogaus su specifinėmis kompetencijomis.
        </p>
        <div className="mt-12 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow-md">
            <Link
              href={lang === 'en' ? '/en/contact' : '/kontaktai'}
              className="w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium rounded-md text-white bg-pink-dark hover:opacity-95 md:text-lg transition-opacity"
            >
              Susisiekti
            </Link>
          </div>
          <div className="mt-3 rounded-md shadow-md sm:mt-0 sm:ml-3">
            <Link
              href={lang === 'en' ? '/en#services' : '#paslaugos'}
              className="w-full flex items-center justify-center px-8 py-3 border-2 border-pink-dark text-base font-medium rounded-md text-pink-dark hover:text-pink md:text-lg transition-colors"
            >
              Paslaugos
            </Link>
          </div>
        </div>
        <p className="mt-12 text-sm text-gray-400 uppercase tracking-wide font-semibold sm:mt-16">
          Mumis pasitiki:
        </p>
        <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
          <div className="flex flex-wrap items-start justify-between">
            <div className="flex justify-center px-1">
              <img
                className="h-5 sm:h-7"
                src="/logos/logo-zenitech.svg"
                alt="Zenitech logo"
              />
            </div>
            <div className="flex justify-center px-1">
              <img
                className="h-5 sm:h-7"
                src="/logos/logo-nexchange.svg"
                alt="Nexchange logo"
              />
            </div>
            <div className="flex justify-center px-1">
              <img
                className="h-5 sm:h-7"
                src="/logos/logo-10speed.svg"
                alt="10speed logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 h-144 lg:h-auto">
        <Image
          src="/hero-image-grey.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Hirepartners dovile ir inga"
          priority
        />
      </div>
    </div>
  );
};

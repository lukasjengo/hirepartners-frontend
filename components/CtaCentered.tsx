import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';

export const CtaCentered = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Reikia pagalbos talentų paieškose?</span>
          <a className="inline-block text-indigo-600 cursor-pointer hover:underline">
            Susisiekite su mumis
            <ArrowRightIcon className="ml-2 w-6 h-6 inline-block font-semibold" />
          </a>
        </h2>

        {/* <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-md">
            <a
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Susisiekti
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

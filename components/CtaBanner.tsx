import React from 'react';
import Link from 'next/link';

export const CtaBanner = () => {
  return (
    <div className="relative bg-pink-dark">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover object-center"
          src="/cta-image-opt.jpg"
          alt=""
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
              <Link href="/darbo-pasiulymai" passHref>
                {/* border border-pink text-base font-medium rounded-md text-pink-dark hover:text-pink md:text-lg transition-colors */}
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-pink-darkest bg-white hover:text-pink transition-colors">
                  Pasiūlymų sąrašas
                  <svg
                    className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                    data-todo-x-description="Heroicon name: solid/external-link"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

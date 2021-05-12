import React from 'react';

export const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="tracking-tight font-extrabold text-gray-900 text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block">Mes esame</span>{' '}
            <span className="block text-indigo-600">Hire Partners</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-8 md:max-w-3xl">
            Padedam surasti talentus įmonėms, kurios neturi vidinio HR, laiko,
            ar ieško specifinių kompetencijų žmogaus.
          </p>
          <div className="mt-12 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow-md">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg"
              >
                Susisiekti
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-md sm:mt-0 sm:ml-3">
              <a
                href="#paslaugos"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:text-lg"
              >
                Paslaugos
              </a>
            </div>
          </div>
          <p className="mt-12 text-sm text-gray-500 uppercase tracking-wide font-semibold sm:mt-16">
            Mumis pasitiki
          </p>
          <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
            <div className="flex flex-wrap items-start justify-between">
              <div className="flex justify-center px-1">
                <img
                  className="h-9 sm:h-10"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="flex justify-center px-1">
                <img
                  className="h-9 sm:h-10"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="flex justify-center px-1">
                <img
                  className="h-9 sm:h-10"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="/hero-image.jpg"
          alt=""
        />
        {/* <Image
      src="/hero-image.jpg"
      layout="intrinsic"
      width={1278}
      height={1917}
    /> */}
      </div>
    </>
  );
};

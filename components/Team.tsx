import React from 'react';
import Image from 'next/image';

import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export const Team = () => {
  return (
    <div className="bg-white" id="komanda">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-base font-semibold tracking-wider text-pink uppercase">
              Komanda
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-pink-darkest tracking-tight sm:text-4xl">
              Mūsų komanda
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="rounded-lg shadow-lg overflow-hidden">
                    <Image
                      layout="responsive"
                      width={384}
                      height={479}
                      objectFit="cover"
                      src="/dovile-profile-crptopt.jpg"
                      alt="Doviles nuotrauka"
                    />
                  </div>
                  {/* <img
                    src="/dovile-profile-crptopt.jpg"
                    alt=""
                  /> */}
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Dovilė</h3>
                    <p className="text-pink">CEO</p>
                  </div>

                  <dl className="mt-8 space-y-2">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span className="ml-3">+370 626 96616</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span className="ml-3">dovile@hirepartners.lt</span>
                    </dd>
                  </dl>
                </div>
              </li>

              <li>
                <div className="space-y-4">
                  <div className="rounded-lg shadow-lg overflow-hidden">
                    <Image
                      layout="responsive"
                      width={384}
                      height={479}
                      objectFit="cover"
                      src="/inga-profile-crptopt.jpg"
                      alt="Ingos nuotrauka"
                    />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Inga</h3>
                    <p className="text-pink">Head of recruitment</p>
                  </div>

                  <dl className="mt-8 space-y-2">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <PhoneIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span className="ml-3">+370 629 99355</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <MailIcon className="flex-shrink-0 w-6 h-6 text-gray-400" />
                      <span className="ml-3">inga@hirepartners.lt</span>
                    </dd>
                  </dl>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

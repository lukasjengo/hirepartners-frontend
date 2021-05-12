import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export const FeaturesCheckList = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
            Kodėl mes?
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Mus rinktis verta
          </p>
        </div>
        <div className="mt-16 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Nėra rizikų
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Atsiskaitymas tik už rezultatą
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Konkurencinga kaina
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Nemokamas darbuotojo pakeitimas nesėkmės atveju
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Greitis ir kokybė
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Paslaugų lankstumas
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Konfidencialumo užtikrinimas
                </dt>
              </div>
            </div>

            <div className="flex">
              <CheckCircleIcon className="text-green-500 h-6 w-6 flex-shrink-0" />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Siūlome 50% mažesnį tarifą pirmajam darbuotojui
                </dt>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

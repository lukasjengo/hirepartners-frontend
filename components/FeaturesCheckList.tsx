import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export const FeaturesCheckList = ({ lang = 'lt' }) => {
  return (
    <div
      className="max-w-7xl mx-auto pt-12 pb-24 lg:py-24 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8"
      id={lang === 'en' ? 'why-us' : 'kodel-mes'}
    >
      <div>
        <h2 className="text-base font-semibold text-pink uppercase tracking-wide">
          Kodėl mes?
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-pink-darkest">
          Mus rinktis verta
        </p>
      </div>
      <div className="mt-16 lg:mt-0 lg:col-span-2">
        <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-6 lg:gap-x-8">
          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Nėra rizikų
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Atsiskaitymas tik už rezultatą
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Konkurencinga kaina
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Nemokamas darbuotojo pakeitimas nesėkmės atveju
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Greitis ir kokybė
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Paslaugų lankstumas
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Konfidencialumo užtikrinimas
              </dt>
            </div>
          </div>

          <div className="flex">
            <CheckCircleIcon className="text-pink-dark h-6 w-6 flex-shrink-0" />
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-pink-darkest">
                Ilgalaikiui bendradarbiavimui siūlome 50% mažesnį tarifą
                pirmajam darbuotojui
              </dt>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

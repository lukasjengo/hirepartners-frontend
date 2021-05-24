import { CheckIcon } from '@heroicons/react/outline';
import React from 'react';

export const AboutSection = () => {
  return (
    <div className="relative py-20 sm:py-24 lg:py-32" id="apie-mus">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-pink uppercase">
          Apie mus
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-pink-darkest tracking-tight sm:text-4xl">
          Mes esame Hire Partners – “Ledo Mintys” dalis
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Orientuojamės į personalo atrankas. Norime ir siekiame būti
          lygiaverčiais Jūsų partneriais.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="pt-6 flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <CheckIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    Tikslas
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Efektyviai, greitai ir kokybiškai padėti talentams ir
                    darbdaviams atrasti vieniems kitus. Mes puikiai žinome, kad
                    darbuotojai yra didžiausias organizacijos turtas.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <CheckIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    Misija
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Pasidalinti sukaupta patirtimi, rinkos įžvalgomis ir
                    svarbiausia - paspartinti klientų verslo sėkmę, parodant
                    kandidatų potencialą abiems pusėms.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 md:flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <CheckIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    Vizija
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Kurti geresnę ateitį darbuotojams ir padėti įmonėms
                    įgyvendinti užsibrėžtus tikslus. Būti arčiau organizacijų ir
                    kandidatų, kad įsiklausyti į jų lūkesčius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

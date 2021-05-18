import {
  ClipboardListIcon,
  OfficeBuildingIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import React from 'react';

export const Features = () => {
  return (
    <div className="py-20 md:py-24 lg:py-32" id="paslaugos">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-4xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-pink uppercase">
          Paslaugos
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-pink-darkest tracking-tight sm:text-4xl">
          Mūsų teikiamos paslaugos
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="pt-6 flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <UserGroupIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    IT darbuotojų atranka
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Ilgalaikė partnerystė - esant didesniam atrankų poreikiui.
                    Vienkartinės atrankos - bendradarbiavimas dėl vienos ar
                    keletos pozicijų.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <ClipboardListIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    Potencialių kandidatų sąrašas
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    IT kandidatų sąrašai, atitinkantys pozicijos reikalavimus –
                    kad organizacija galėtų savarankiškai atlikti tolimesnius
                    veiksmus.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 md:flex">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-pink-dark rounded-md shadow-lg">
                      <OfficeBuildingIcon className="h-6 w-6 text-white" />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-pink-darkest tracking-tight">
                    Darbas įmonės viduje
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    Sutartą laikotarpį galime dirbti Jūsų įmonės viduje,
                    išskirtinai su Jūsų pozicijomis, ir vykdyti kitas HR
                    funkcijas.
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

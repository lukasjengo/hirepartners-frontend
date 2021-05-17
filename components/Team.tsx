import React from 'react';

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
            <ul
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              data-todo-x-max="1"
            >
              <li>
                <div className="space-y-4">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="/dovile-profile-crptopt.jpg"
                    alt=""
                  />
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Dovilė</h3>
                    <p className="text-pink">CEO</p>
                  </div>

                  <dl className="mt-8 space-y-2">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        data-todo-x-description="Heroicon name: outline/phone"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span className="ml-3">+370 626 96616</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        data-todo-x-description="Heroicon name: outline/mail"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="ml-3">dovile@hirepartners.lt</span>
                    </dd>
                  </dl>
                </div>
              </li>

              <li>
                <div className="space-y-4">
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="/inga-profile-crptopt.jpg"
                    alt=""
                  />
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Inga</h3>
                    <p className="text-pink">Head of recruitment</p>
                  </div>

                  <dl className="mt-8 space-y-2">
                    <dt>
                      <span className="sr-only">Phone number</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        data-todo-x-description="Heroicon name: outline/phone"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span className="ml-3">+370 629 99355</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-gray-500">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-400"
                        data-todo-x-description="Heroicon name: outline/mail"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
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

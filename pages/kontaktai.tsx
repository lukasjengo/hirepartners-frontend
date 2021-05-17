import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Kontaktai() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mb-12 xl:mb-24">
      <div className="w-full px-4 sm:px-6 mt-10 mx-auto lg:mx-0">
        <h2 className="text-2xl font-extrabold tracking-tight text-pink-darkest sm:text-3xl">
          Susisiekite su mumis
        </h2>
        <dl className="mt-8 text-base text-gray-500">
          <div className="mt-6">
            <dt className="sr-only">Telefono numeris</dt>
            <dd className="flex">
              <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
              <span className="ml-3">+370 626 96616</span>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Elektroninis paštas</dt>
            <dd className="flex">
              <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" />
              <span className="ml-3">info@hirepartners.lt</span>
            </dd>
          </div>
        </dl>
      </div>
      <div className="w-full px-4 sm:px-6 mx-auto lg:max-w-none">
        <form
          action="#"
          method="POST"
          className="mt-14 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              Vardas
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Pavardė
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="family-name"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              El. paštas
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Įmonės pavadinimas
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefono numeris
              </label>
              <span id="phone_description" className="text-sm text-gray-500">
                Nebūtinas
              </span>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-describedby="phone_description"
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="how_can_we_help"
                className="block text-sm font-medium text-gray-700"
              >
                Jūsų žinutė
              </label>
            </div>
            <div className="mt-1">
              <textarea
                id="how_can_we_help"
                name="how_can_we_help"
                aria-describedby="how_can_we_help_description"
                rows={4}
                className="block w-full shadow-sm sm:text-sm focus:ring-pink focus:border-pink border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div className="text-right sm:col-span-2">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium shadow-md rounded-md text-white bg-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink hover:opacity-90 transition-opacity"
            >
              Siųsti
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

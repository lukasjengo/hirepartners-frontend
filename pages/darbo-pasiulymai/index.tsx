import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import { CurrencyEuroIcon, LocationMarkerIcon } from '@heroicons/react/outline';

import { getTextBetweenSymbols } from 'utils/stringUtils';
import { JobResponse } from 'types/Job';

interface Props {
  data: JobResponse[];
}

export default function DarboPasiulymai({ data }: Props) {
  const router = useRouter();
  return (
    <div className="bg-gray-100 py-6 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Darbo pasiūlymai
        </h1>
        <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {data.map((job) => (
              <li key={job.id}>
                <Link href={`${router.pathname}/${job.slug}`} passHref>
                  <a className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate capitalize">
                          {job.title.rendered.toLowerCase()}
                        </p>
                        {job.acf.featured && (
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                              Populiarus
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {job.acf.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <CurrencyEuroIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          <p>From {job.acf.monthly_salary} Eur</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, headers }: { data: JobResponse[]; headers: any } =
    await axios.get(
      'https://wpcms.hirepartners.lt/wp-json/wp/v2/darbo-pasiulymai?per_page=100&page=1'
    );

  let notLastPage = headers.link.includes('rel="next');
  let allData = data;
  let newHeaders = headers;

  while (notLastPage) {
    const { data, headers }: { data: JobResponse[]; headers: any } =
      await axios.get(
        getTextBetweenSymbols(
          newHeaders.link
            .split(',')
            .find((h: string) => h.includes('rel="next')),
          '<',
          '>'
        )
      );
    newHeaders = headers;
    notLastPage = headers.link.includes('rel="next');
    allData = [...allData, ...data];
  }

  return {
    props: { data: allData },
    revalidate: 15,
  };
};

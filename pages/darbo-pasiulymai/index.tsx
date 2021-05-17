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
    <div className="pt-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-extrabold text-pink-darkest tracking-tight sm:text-4xl">
          Darbo pasiūlymai
        </h1>
        <p className="mt-5 max-w-prose text-xl text-gray-500">
          Čia rasite visus aktyvius mūsų komandos kruopščiai atrinktus darbo
          pasiūlymus.
        </p>
        <div className="mt-6 bg-pink-darkest shadow overflow-hidden rounded-md">
          <ul className="divide-y divide-pink">
            {data.map((job) => (
              <li key={job.id}>
                <Link href={`${router.pathname}/${job.slug}`} passHref>
                  <a className="block hover:bg-pink-dark transition-colors">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-pink truncate capitalize">
                          {job.title.rendered.toLowerCase()}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <div className="flex">
                          <p className="flex items-center text-sm text-white opacity-90">
                            <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {job.acf.location}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-white opacity-90">
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

  if (!data) {
    return {
      notFound: true,
    };
  }

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
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

import { LocationMarkerIcon } from '@heroicons/react/outline';

import { JobResponse } from 'types/Job';
import {
  getTextBetweenSymbols,
  removeAllWhiteSpace,
  splitAtLinebreaks,
} from 'utils/stringUtils';

interface Props {
  data: JobResponse;
}

export default function Dev({ data }: Props) {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <div className="flex justify-center items-center text-base text-pink font-semibold tracking-wide uppercase">
          <LocationMarkerIcon className="mr-1 h-5 w-5 text-gray-400" />
          {data.acf.location}
        </div>
        <h1 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-pink-darkest sm:text-4xl">
          {data.title.rendered}
        </h1>
        <p className="mt-16 text-xl text-gray-500 leading-8">
          {data.acf.job_description}
        </p>
      </div>
      <div className="mt-6 prose prose-lg text-gray-500 mx-auto">
        {splitAtLinebreaks(data.acf.company_expects) && (
          <>
            <h2>We expect you are:</h2>
            <ul>
              {data.acf.company_expects
                .split(/[\r\n]+/)
                .map((textLine, index) =>
                  removeAllWhiteSpace(textLine).length === 0 ? null : (
                    <li key={index + textLine.split(' ')[0]}>{textLine}</li>
                  )
                )}
            </ul>
          </>
        )}
        {splitAtLinebreaks(data.acf.company_offers) && (
          <>
            <h2>Company offers:</h2>
            <ul>
              {data.acf.company_offers
                .split(/[\r\n]+/)
                .map((textLine, index) =>
                  removeAllWhiteSpace(textLine).length === 0 ? null : (
                    <li key={index + textLine.split(' ')[0]}>{textLine}</li>
                  )
                )}
            </ul>
          </>
        )}
        {splitAtLinebreaks(data.acf.tech_stack) && (
          <>
            <h2>Tech stack:</h2>
            <ul>
              {data.acf.tech_stack
                .split(/[\r\n]+/)
                .map((textLine, index) =>
                  removeAllWhiteSpace(textLine).length === 0 ? null : (
                    <li key={index + textLine.split(' ')[0]}>{textLine}</li>
                  )
                )}
            </ul>
          </>
        )}
        <p>
          <strong>
            Monthly salary from {data.acf.monthly_salary} EUR gross.
          </strong>
        </p>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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

  const paths = allData.map((job) => ({
    params: { slug: job.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data }: { data: JobResponse[] } = await axios.get(
    `https://wpcms.hirepartners.lt/wp-json/wp/v2/darbo-pasiulymai?slug=${params?.slug}`
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data[0] },
    revalidate: 10,
  };
};

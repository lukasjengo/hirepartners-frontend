import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import axios from 'axios';
import { LocationMarkerIcon } from '@heroicons/react/outline';

import { JobSkeleton } from 'components';
import { getTextBetweenSymbols, stripHtml, trimText } from 'utils/stringUtils';
import { JobResponse } from 'types/Job';

interface Props {
  data: JobResponse;
}

export default function DarboPasiulymas({ data }: Props) {
  if (!data) {
    return <JobSkeleton />;
  }
  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <NextSeo
        title={`${data.title.rendered}`}
        description={`${stripHtml(trimText(data.content.rendered, 160))}.`}
        openGraph={{
          type: 'website',
          url: `https://www.hirepartners.lt/darbo-pasiulymai/${data.slug}`,
          title: `${data.title.rendered} | HirePartners.lt`,
          description: `${stripHtml(trimText(data.content.rendered, 160))}.`,
        }}
      />
      <div className="text-lg max-w-prose mx-auto">
        <div className="flex justify-center items-center text-base text-pink font-semibold tracking-wide uppercase">
          <LocationMarkerIcon className="mr-1 h-5 w-5 text-gray-400" />
          {data.acf.location}
        </div>
        <h1 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-pink-darkest sm:text-4xl">
          {data.title.rendered}
        </h1>
        <div
          className="mt-16 prose prose-lg prose-pink text-gray-500 mx-auto"
          dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        />
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data, headers }: { data: JobResponse[]; headers: any } =
    await axios.get(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/darbo-pasiulymai?per_page=100&page=1`
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data }: { data: JobResponse[] } = await axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/darbo-pasiulymai?slug=${params?.slug}`
  );

  if (!data.length) {
    return {
      redirect: {
        destination: '/darbo-pasiulymai',
        permanent: false,
      },
    };
  }

  return {
    props: { data: data[0] },
    revalidate: 1,
  };
};

import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/legacy/image";
import { NextSeo } from 'next-seo';
import axios from 'axios';

import { ArrowRightIcon } from '@heroicons/react/outline';

import { getTextBetweenSymbols, stripHtml, trimText } from 'utils/stringUtils';
import { BlogResponse } from 'types/Blog';

const Seo = () => (
  <NextSeo
    title="Blogas"
    description="Čia rasite visus mūsų komandos publikuojamus informacinius straipsnius."
    openGraph={{
      type: 'website',
      url: 'https://www.hirepartners.lt/blogas',
      title: 'Blogas | HirePartners.lt',
      description:
        'Čia rasite visus mūsų komandos publikuojamus informacinius straipsnius.',
    }}
  />
);

interface Props {
  data: BlogResponse[];
}

export default function Blog({ data }: Props) {
  const router = useRouter();
  return (
    <main className="pt-10 pb-20">
      <Seo />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="mt-2 text-3xl font-extrabold text-pink-darkest tracking-tight sm:text-4xl">
          Blogas
        </h1>
        <p className="mt-5 max-w-prose text-xl text-gray-500">
          Čia rasite visus mūsų komandos publikuojamus informacinius
          straipsnius.
        </p>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative flex-shrink-0 h-48 w-full">
                <Image
                  src={
                    post._embedded
                      ? post._embedded['wp:featuredmedia'][0].media_details
                          .sizes.medium_large.source_url
                      : '/default-blog-image-opt.jpg'
                  }
                  alt={
                    post._embedded
                      ? post._embedded['wp:featuredmedia'][0].alt_text
                      : 'publikacijos pagrindine nuotrauka'
                  }
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <Link
                    href={`${router.pathname}/${post.slug}`}
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title.rendered}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {`${stripHtml(trimText(post.excerpt.rendered, 250))}...`}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.modified.split('T')[0]}>
                      {post.modified.split('T')[0]}
                    </time>
                  </div>
                  <div className="flex ml-auto">
                    <Link
                      href={`${router.pathname}/${post.slug}`}
                      className="inline-block text-sm font-medium text-pink-dark border-b-2 border-pink hover:border-pink-dark transition-colors"
                    >
                      Skaityti{' '}
                      <ArrowRightIcon className="inline w-3 h-3 text-pink-dark" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data, headers }: { data: BlogResponse[]; headers: any } =
    await axios.get(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=100&page=1&_embed=wp:featuredmedia`
    );

  let notLastPage = headers.link.includes('rel="next');
  let allData = data;
  let newHeaders = headers;

  while (notLastPage) {
    const { data, headers }: { data: BlogResponse[]; headers: any } =
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
    revalidate: 1,
  };
};

import { GetStaticPaths, GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import axios from 'axios';

import { BlogSkeleton } from 'components';
import { getTextBetweenSymbols, stripHtml, trimText } from 'utils/stringUtils';
import { BlogResponse } from 'types/Blog';

interface Props {
  data: BlogResponse;
}

export default function BlogArticle({ data }: Props) {
  if (!data) {
    return <BlogSkeleton />;
  }

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <NextSeo
        title={`${data.title.rendered}`}
        description={`${stripHtml(trimText(data.excerpt.rendered, 160))}.`}
        openGraph={{
          type: 'website',
          url: `https://www.hirepartners.lt/blog/${data.slug}`,
          title: `${data.title.rendered} | HirePartners.lt`,
          description: `${stripHtml(trimText(data.excerpt.rendered, 160))}.`,
          images: [
            {
              url: data._embedded
                ? data._embedded['wp:featuredmedia'][0].media_details.sizes
                    .large.source_url
                : '/default-blog-image-opt.jpg',
              width: 1200,
              height: 627,
              alt: data._embedded
                ? data._embedded['wp:featuredmedia'][0].alt_text
                : 'publikacijos pagrindine nuotrauka',
            },
          ],
        }}
      />
      <div className="text-lg max-w-prose mx-auto">
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
  const { data, headers }: { data: BlogResponse[]; headers: any } =
    await axios.get(
      `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?per_page=100&page=1`
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

  const paths = allData.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data }: { data: BlogResponse[] } = await axios.get(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/wp/v2/posts?slug=${params?.slug}`
  );

  if (!data.length) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  return {
    props: { data: data[0] },
    revalidate: 1,
  };
};

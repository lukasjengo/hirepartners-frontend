import { NextSeo } from 'next-seo';

const Seo = () => (
  <NextSeo
    title="Tokio puslapio nėra"
    description="Tokio puslapio nėra."
    noindex={true}
  />
);

export default function ZinuteIssiusta() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center screenheight-nonav--allsizes">
      <Seo />
      <h2 className="text-5xl font-extrabold tracking-tight text-pink-darkest sm:text-7xl">
        <span className="block">404</span>
        <span className="block text-pink">Puslapis nerastas</span>
      </h2>
    </main>
  );
}

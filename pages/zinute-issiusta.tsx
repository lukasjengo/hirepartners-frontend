import { NextSeo } from 'next-seo';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Seo = () => (
  <NextSeo
    title="Žinutė išsiųsta"
    description="Jūsų žinutė išsiųsta."
    noindex={true}
  />
);

export default function ZinuteIssiusta() {
  return (
    <main className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center screenheight-nonav--allsizes">
      <Seo />
      <CheckCircleIcon className="mb-6 w-12 h-12 inline-block text-pink-darkest" />
      <h2 className="text-3xl font-extrabold tracking-tight text-pink-darkest sm:text-4xl">
        <span className="block">Ačiū už žinutę!</span>
        <span className="block text-pink">Susisieksime per 24 valandas.</span>
      </h2>
    </main>
  );
}

import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { Header, Footer, Notification, CookieIcon } from 'components';
import { SEO } from 'next-seo.config';
import * as gtag from 'lib/gtag';
import { getIsEnglishPath } from 'utils/urlUtils';

import '../styles/globals.css';

const isProd = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathName = usePathname();
  const isEnglishPath = getIsEnglishPath(pathName);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const [showNotification, setShowNotification] = useState<boolean>(false);

  const notificationCloseAction = () => {
    localStorage.setItem('cookieConsentShown', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('cookieConsentShown')) {
      setShowNotification(false);
    } else {
      setShowNotification(true);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header lang={isEnglishPath ? 'en' : 'lt'} />
      <Component {...pageProps} />
      {showNotification && (
        <Notification
          icon={<CookieIcon className="w-6 h-6" fill="#5b404d" />}
          actionElement={
            <Link
              href="/privatumo-politika"
              className="inline-block mt-2 text-sm font-medium text-pink-dark border-b-2 border-pink hover:border-pink-dark transition-colors"
            >
              {isEnglishPath ? 'More about cookies' : 'Plačiau apie slapukus'}
            </Link>
          }
          title={isEnglishPath ? 'We use cookies' : 'Mes naudojame slapukus'}
          description={
            isEnglishPath
              ? 'Our website uses cookies. By browsing this website, you agree with our use of cookies.'
              : 'Mūsų interneto svetainėje yra naudojami slapukai. Naršydami toliau, Jūs sutinkate su slapukų naudojimu.'
          }
          setShow={setShowNotification}
          closeAction={notificationCloseAction}
        />
      )}
      <Footer lang={getIsEnglishPath(pathName) ? 'en' : 'lt'} />
    </>
  );
}

export default MyApp;

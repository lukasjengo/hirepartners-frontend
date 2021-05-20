import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import { Header, Footer, Notification, CookieIcon } from 'components';
import { SEO } from 'next-seo.config';
import * as gtag from 'lib/gtag';

import '../styles/globals.css';

const isProd = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const [notification, setNotification] = useState<null | string>(
    'Mūsų interneto svetainėje yra naudojami slapukai. Naršydami toliau, Jūs sutinkate su slapukų naudojimu.'
  );

  const notificationCloseAction = () => {
    localStorage.setItem('cookieConsentShown', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('cookieConsentShown')) {
      setNotification(null);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      {notification && (
        <Notification
          icon={<CookieIcon className="w-6 h-6" fill="#5b404d" />}
          actionElement={
            <Link href="/privatumo-politika" passHref>
              <a className="inline-block mt-2 text-sm font-medium text-pink-dark border-b-2 border-pink">
                Plačiau apie slapukus
              </a>
            </Link>
          }
          title="Mes naudojame slapukus"
          description={notification}
          setShow={setNotification}
          closeAction={notificationCloseAction}
        />
      )}
      <Footer />
    </>
  );
}

export default MyApp;

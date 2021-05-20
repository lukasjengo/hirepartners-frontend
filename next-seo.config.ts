import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    url: 'https://www.hirepartners.lt/',
    title: 'Padedame surasti talentus įmonėms | HirePartners.lt',
    description:
      'Padedame surasti talentus įmonėms, kurios neturi vidinio HR, laiko, ar ieško specifinių kompetencijų žmogaus.',
    images: [
      {
        url: 'https://wpcms.hirepartners.lt/wp-content/uploads/2021/05/hirepartners-logo-og.jpg',
        width: 1200,
        height: 627,
        alt: 'Hire partners logo',
      },
    ],
  },
  titleTemplate: '%s | HirePartners.lt',
  defaultTitle: 'Padedame surasti talentus įmonėms | HirePartners.lt',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

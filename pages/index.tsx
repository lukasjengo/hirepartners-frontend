import { NextSeo } from 'next-seo';

import {
  Features,
  FeaturesCheckList,
  CtaBanner,
  AboutSection,
  Team,
  CtaCentered,
  Hero,
} from 'components';

export default function Home() {
  return (
    <main>
      <NextSeo
        title="Padedame surasti talentus įmonėms"
        description="Padedame surasti talentus įmonėms, kurios neturi vidinio HR, laiko, ar
          ieško specifinių kompetencijų žmogaus."
      />
      <Hero />
      <Features />
      <FeaturesCheckList />
      <CtaBanner />
      <AboutSection />
      <Team />
      <CtaCentered />
    </main>
  );
}

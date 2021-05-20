import { NextSeo } from 'next-seo';

import { Features } from 'components/Features';
import { FeaturesCheckList } from 'components/FeaturesCheckList';
import { CtaBanner } from 'components/CtaBanner';
import { AboutSection } from 'components/AboutSection';
import { Team } from 'components/Team';
import { CtaCentered } from 'components/CtaCentered';
import { Hero } from 'components/Hero';

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

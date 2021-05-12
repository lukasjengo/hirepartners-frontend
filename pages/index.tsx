import { Features } from 'components/Features';
import { FeaturesCheckList } from 'components/FeaturesCheckList';
import { CtaBanner } from 'components/CtaBanner';
import { AboutSection } from 'components/AboutSection';
import { Team } from 'components/Team';
import { CtaCentered } from 'components/CtaCentered';
import { Hero } from 'components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesCheckList />
      <CtaBanner />
      <AboutSection />
      <Team />
      <CtaCentered />
    </>
  );
}

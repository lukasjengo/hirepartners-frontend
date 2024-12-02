import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';

import {
  Features,
  FeaturesCheckList,
  CtaBanner,
  AboutSection,
  Team,
  CtaCentered,
  Hero,
} from 'components';
import { getIsEnglishPath } from 'utils/urlUtils';

export default function Home() {
  const pathName = usePathname();
  const isEnglishPath = getIsEnglishPath(pathName);
  return (
    <main>
      <NextSeo
        title="Padedame surasti talentus įmonėms"
        description="Padedame surasti talentus įmonėms, kurios neturi vidinio HR, laiko, ar
          ieško specifinių kompetencijų žmogaus."
      />
      <Hero lang={isEnglishPath ? 'en' : 'lt'} />
      <Features lang={isEnglishPath ? 'en' : 'lt'} />
      <FeaturesCheckList />
      <CtaBanner lang={isEnglishPath ? 'en' : 'lt'} />
      <AboutSection />
      <Team />
      <CtaCentered lang={isEnglishPath ? 'en' : 'lt'} />
    </main>
  );
}

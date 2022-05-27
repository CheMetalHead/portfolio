import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Let's start our journey
      </SectionText>
      <Button onClick={()=>window.location = 'https://github.com/CheMetalHead'}>Learn More On My Github</Button>
    </LeftSection>
  </Section>
);

export default Hero;
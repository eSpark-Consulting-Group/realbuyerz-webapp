'use client';
import { keyframes } from '@mui/system';

import HeroSlider from './HeroSlider';

import {
  HERO_SECTION_CONTENT,
  HERO_SECTION_IMAGES,
} from '@/src/constants/Constants';

const enhancedSwingingIntoPlace = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(30%);
  }
  70% {
    transform: translateX(-20%);
  }
  85% {
    transform: translateX(10%);
  }
  95% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(0);
  }
`;

const HeroSection = () => {
  const { heading, logo } = HERO_SECTION_CONTENT;

  return (
    <HeroSlider
      effect={'fade'}
      pagination={true}
      delay={1500}
      SlidesData={HERO_SECTION_IMAGES}
      logo={logo}
      enhancedSwingingIntoPlace={enhancedSwingingIntoPlace}
      heading={heading}
    />
  );
};

export default HeroSection;

import React from 'react';
import { HeroBg, HeroContainer, HeroInnerContainer, HeroLeftContainer, HeroRightContainer, Image, ResumeButton, Span, SubTitle, TextLoop, Title } from './HeroStyledComponent';
import HeroImg from '../../images/profile.png'
import { Bio } from '../../data/constants'
import TypewriterComponent from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
              I am a
              <Span>
                <TypewriterComponent
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">Resume </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer>
                  <Image src={HeroImg} alt="Hero image" />
          </HeroRightContainer>

        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero
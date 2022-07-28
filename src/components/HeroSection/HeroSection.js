import React from 'react';
import {
    HeroContainer,
    HeroTextWrapper,
    HeroText,
    HeroSubText,
    BackgroundTextHigher,
    BackgroundTextLower,
} from './HeroElements.js';
import Flo from '../../images/flo.png';
import Mind from '../../images/mind.png';

const HeroSection = () => {
    return (
        <HeroContainer>
            <BackgroundTextLower src={Flo} alt="flo"></BackgroundTextLower>
            <BackgroundTextHigher src={Mind} alt="flo"></BackgroundTextHigher>
            <HeroTextWrapper>
                <HeroText id="hero_text">flomind</HeroText>
                <HeroSubText>next generation mind reading technology</HeroSubText>
            </HeroTextWrapper>
        </HeroContainer>
    )
}

export default HeroSection
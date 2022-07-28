import styled from "styled-components";

export const HeroContainer = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Roboto Mono', monospace;
position: relative;
background-color: #000;
`

export const BackgroundTextHigher = styled.img`
height: auto;
width: 40%;
position: absolute;
top: 10vh;
right: 0;
z-index: 10;

@media screen and (max-width: 768px) {
    height: 20%;
    width: auto;
}
`
export const BackgroundTextLower = styled.img`
height: auto;
width: 40%;
position: absolute;
bottom: 0;
left: 5vw;
z-index: 10;

@media screen and (max-width: 768px) {
    height: 20%;
    width: auto;
}
`

export const HeroTextWrapper = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 500px) {
    align-items: center;
    justify-content: center;
}
`

export const HeroText = styled.h1`
font-size: 4rem;
color: var(--primary);
z-index: 10;
transition: opacity .5s ease-in-out;
margin-left: 1rem;

&.hide{
    opacity: 0;}
&.show {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    font-size: 3rem;
}
@media screen and (max-width: 500px) {
    font-size: 3rem;
}
`

export const HeroSubText = styled.h4`
font-size: 1.5rem;
color: var(--secondary);
margin-left: 3rem;
z-index: 10;

@media screen and (max-width: 768px) {
    font-size: 1rem;
}
@media screen and (max-width: 500px) {
    font-size: 1rem;
    margin: 0 1rem;
    text-align: center;
}
`
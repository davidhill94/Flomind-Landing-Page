import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Nav = styled.div`
width: 100px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1rem;
    background-color: transparent;
`

export const NavOuterContainer = styled.div`
width: 80px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
`

export const NavBars = styled.p`
display: none;

&:hover{
    color: var(--secondary);
}

@media screen and (max-width: 650px){
    display: flex;
    color: var(--primary);
    font-size: 1.5rem;
    cursor: pointer;
}
`

export const NavLinkContainer = styled.div`
display: flex;
    flex-direction: column;

    @media screen and (max-width: 650px){
        display: none;
    }
`

export const NavMenu = styled.div`
list-style: none;
`

export const NavItem = styled.div`
&:hover{
    transform: translateX(10px);
    transition: 0.3s ease;
}
`

export const NavLink = styled(Link)`
font-size: 3rem;
    color: var(--primary);

    &:hover{
        color: var(--secondary);
    }
`

export const NavLogo = styled(Link)`
background-color: transparent;
`

export const LogoImg = styled.img`
width: 50px;
height: auto;
margin-bottom: 1rem;
`

export const NavSocialContainer = styled.div`
display: flex;
    flex-direction: column;

    @media screen and (max-width: 650px){
        display: none;
    }
`

export const NavSocialMenu = styled.div`
list-style: none;
`

export const NavSocialItem = styled.div`
&:hover{
    transform: translateX(10px);
    transition: 0.3s ease;
}
`

export const NavSocialLink = styled.a`
font-size: 2rem;
    color: var(--primary);

    &:hover{
        color: var(--secondary);
    }
`
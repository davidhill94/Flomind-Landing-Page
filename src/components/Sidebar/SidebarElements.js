import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    font-family: 'Roboto Mono', monospace;
    sans-serif;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    `

export const CloseIcon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
    outline: none;
    color: var(--primary);
    transition: 0.2s ease;

    &:hover {
        transform: scale(1.1);
        color: var(--secondary);
    }
    `

export const UserIcon = styled(Link)`
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2.5rem;
    cursor: pointer;
    outline: none;
    color: var(--primary);

    &:hover {
        color: var(--secondary);
    }
    `

export const SidebarWrapper = styled.div`
    width: 100%;
    `

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-row: repeat(5, 80px);
    text-align: center;
    padding: 0;
    
    @media screen and (max-width: 768px) {
        grid-template-rows: repeat(5, 60px);
    }
    `

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: var(--primary);
    cursor: pointer;
    width: 100%;
    
    &:hover {
        color: var(--secondary);
        transtiion: 0.2s ease-in-out;
        transform: translateX(10px);
    }
    `

    export const LinkText = styled.p`
    margin-left: 1rem;
    font-size: 2rem;
    color: var(--primary);
    `

export const Socialbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-top: 2rem;
    `

export const SocialIcon = styled.a`
    color: white;
    margin: 0 1rem;
    cursor: pointer;
    color: var(--primary);
    
    &:hover {
        transform: scale(1.1) translateY(-5px);
        transition: transform 0.2s ease;
        color: var(--secondary);
    }
    `
    
export const NavLogo = styled(Link)`
        display: block;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        margin-top: 4rem;
        color: var(--primary);
    `

export const LogoImg = styled.img`
height: 100px;
width: auto;

&:hover{
    transform: scale(1.1);
    transition: 0.3s ease;
}
`
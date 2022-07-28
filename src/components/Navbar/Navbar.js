import React from 'react';
import { FaBars, FaBrain, FaConnectdevelop, FaFacebook, FaInstagram, FaTwitter, FaUserCircle} from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import logo from '../../images/logo.png';
import {
    Nav,
    NavOuterContainer,
    NavBars,
    NavLogo,
    LogoImg,
    NavLinkContainer,
    NavMenu,
    NavItem,
    NavLink,
    NavSocialContainer,
    NavSocialMenu,
    NavSocialItem,
    NavSocialLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {

        const handleText = (text) => {
            
            const heroText = document.getElementById('hero_text');
            if(heroText){
            heroText.classList.remove("show");
            heroText.classList.add("hide");
            setTimeout(function(){
                heroText.innerHTML = (text);
                heroText.classList.remove("hide");
                heroText.classList.add("show");
            }, 700)
        } else {
            return null
        }
        }

    return (
        <Nav>
            <NavOuterContainer>
                <NavBars onClick={toggle}><FaBars /></NavBars>
                    <NavLinkContainer>
                        <NavMenu>
                            <NavItem>
                                <NavLogo to="/">
                                <LogoImg src={logo} alt="logo"></LogoImg>
                                </NavLogo>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/about" onMouseEnter={() => handleText("About")} onMouseLeave={() => handleText("Flomind")}><FaBrain /></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/behind-the-tech" onMouseEnter={() => handleText("Behind the Tech")} onMouseLeave={() => handleText("Flomind")}><FaConnectdevelop /></NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink to="/reviews" onMouseEnter={() => handleText("Reviews")} onMouseLeave={() => handleText("Flomind")}><MdReviews /></NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavLinkContainer>
                <NavSocialContainer >
                    <NavSocialMenu>
                        <NavSocialItem>
                            <NavSocialLink href="/" target="_blank"><FaFacebook /></NavSocialLink>
                            </NavSocialItem>
                            <NavSocialItem>
                            <NavSocialLink href="/" target="_blank"><FaInstagram /></NavSocialLink>
                            </NavSocialItem>
                            <NavSocialItem>
                            <NavSocialLink href="/" target="_blank"><FaTwitter /></NavSocialLink>
                            </NavSocialItem>
                            <NavSocialItem>
                            <NavLink style={{fontSize: "2rem"}} to="/sign-up"><FaUserCircle /></NavLink>
                            </NavSocialItem>
                    </NavSocialMenu>
                </NavSocialContainer>
            </NavOuterContainer>
        </Nav>
    )
}

export default Navbar
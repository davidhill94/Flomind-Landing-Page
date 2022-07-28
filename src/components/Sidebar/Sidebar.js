import React from 'react';
import { FaBrain, FaConnectdevelop, FaFacebook, FaInstagram, FaTimes, FaTwitter, FaUserCircle } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import logo from '../../images/logo.png'
import { 
    SidebarContainer,
    CloseIcon,
    UserIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    LinkText,
    Socialbar,
    SocialIcon,
    NavLogo,
    LogoImg
 } from './SidebarElements';

const Sidebar = ({toggle, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <CloseIcon>
            <FaTimes />
        </CloseIcon>
        <UserIcon to="/sign-up">
            <FaUserCircle />
        </UserIcon>
        <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink 
                  to="/about" 
                  onClick={toggle}>
                      <FaBrain />
                      <LinkText>About</LinkText>
                      </SidebarLink>
                  <SidebarLink
                  to="/behind-the-tech"  
                  onClick={toggle}>
                      <FaConnectdevelop />
                      <LinkText>Tech</LinkText>
                      </SidebarLink>
                  <SidebarLink 
                  to="/reviews" 
                  onClick={toggle}>
                      <MdReviews /> 
                      <LinkText>Reviews</LinkText>
                      </SidebarLink>
                  <Socialbar>
                      <SocialIcon href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocialIcon>
                      <SocialIcon href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocialIcon>
                      <SocialIcon href='/' target="_blank" aria-label="Twitter"><FaTwitter /></SocialIcon>
              </Socialbar>
              <NavLogo to="/" onClick={toggle}>
                  <LogoImg src={logo} alt="logo"></LogoImg>
              </NavLogo>
              </SidebarMenu>
          </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
import { NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SetStateAction, useState } from 'react';
import { useEffect } from 'react';

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50) {
              setScroll(true);
          }
          else {
              setScroll(false);
          }
        }
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
          };
      }, [])

      const onUpdateActiveLink = (value: SetStateAction<string>) => {
          setActiveLink(value);
      }

  return (
    <Navbar expand="lg" className={scroll ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link": "navbar-link"} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link": "navbar-link" } onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link": "navbar-link"} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <div className="navText">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/lana-anvar" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/Lanaanvar" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

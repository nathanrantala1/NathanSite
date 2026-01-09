import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import instagramIcon from '../assets/images/Instagram.png';
import spotifyIcon from '../assets/images/spotify.png';
import linkedinIcon from '../assets/images/linkedin.png';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['demo', 'bio', 'works', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const windowBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If we're at the very top, activate top
      if (window.scrollY < 100) {
        setActiveSection('top');
        return;
      }

      // If we're at or very near the bottom of the page, activate contact
      if (windowBottom >= documentHeight - 10) {
        setActiveSection('contact');
        return;
      }

      // Check sections in reverse order to prioritize later sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // If more than half the section is visible, activate it
          if (scrollPosition >= sectionTop + sectionHeight * 0.3) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-brand">NATHAN RANTALA</div>
          <div className="navbar-socials">
            <a
              href="https://www.instagram.com/nathan.rantala/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
            </a>
            <a
              href="https://open.spotify.com/artist/4aSxGK0afj1s1XswrQcDUm"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img src={spotifyIcon} alt="Spotify" className="social-icon-img" />
            </a>
            <a
              href="https://www.linkedin.com/in/nathan-rantala-ab56aa1b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
            </a>
          </div>
        </div>
        <div className="navbar-links">
          <button
            onClick={() => scrollToSection('top')}
            className={`top-button ${activeSection === 'top' ? 'active' : ''}`}
          >
            Top
          </button>
          <button
            onClick={() => scrollToSection('demo')}
            className={activeSection === 'demo' ? 'active' : ''}
          >
            Demo Reel
          </button>
          <button
            onClick={() => scrollToSection('bio')}
            className={activeSection === 'bio' ? 'active' : ''}
          >
            Bio
          </button>
          <button
            onClick={() => scrollToSection('works')}
            className={activeSection === 'works' ? 'active' : ''}
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              <button
                onClick={() => scrollToSection('top')}
                className={activeSection === 'top' ? 'active' : ''}
              >
                Top
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className={activeSection === 'demo' ? 'active' : ''}
              >
                Demo Reel
              </button>
              <button
                onClick={() => scrollToSection('bio')}
                className={activeSection === 'bio' ? 'active' : ''}
              >
                Bio
              </button>
              <button
                onClick={() => scrollToSection('works')}
                className={activeSection === 'works' ? 'active' : ''}
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </button>
            </div>

            <div className="mobile-socials">
              <a
                href="https://www.instagram.com/nathan.rantala/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <img src={instagramIcon} alt="Instagram" />
                <span>Instagram</span>
              </a>
              <a
                href="https://open.spotify.com/artist/4aSxGK0afj1s1XswrQcDUm"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <img src={spotifyIcon} alt="Spotify" />
                <span>Spotify</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nathan-rantala-ab56aa1b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

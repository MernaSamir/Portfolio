import { map } from 'lodash'
import React, { useEffect, useState } from 'react'
import './header.css'
export default function Header() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const handleMenuItemClick = () => {
    setHamburgerActive(false);
  };

    const sections = {
        hero:"Home",
        projects:"Projects",
        about:"About",
        contact:"Contact"
    }
  return (
    <section id="header">
      <div className="header container" style={{backgroundColor:scrollBackground ? '#29323c' : 'transparent'}}>
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>M</span>irna <span>S</span>amir <span>M</span>osaad
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className={`hamburger ${hamburgerActive ? 'active' : ''}`} onClick={toggleMobileMenu}>
              <div className="bar"></div>
            </div>
            <ul className={`nav-menu ${hamburgerActive ? 'active' : ''}`}>
              {map(sections, (section, i) => (
                <li key={i}>
                  <a
                    href={`#${i}`}
                    data-after={section}
                    onClick={handleMenuItemClick}
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


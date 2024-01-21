import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar position="fixed" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      sx={{ color: 'black' }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={scrollToTop}
          >
            My Portfolio
          </span>
        </Typography>
        <Button color="inherit" onClick={() => scrollToSection('top')}>Top</Button>
        <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
        <Button color="inherit" onClick={() => scrollToSection('works')}>Works</Button>
        <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
        <Button color="inherit" onClick={() => scrollToSection('contacts')}>Contacts</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

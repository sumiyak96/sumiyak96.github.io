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

  return (
    <AppBar position="fixed" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" href="#top">Top</Button>
        <Button color="inherit" href="#about">About</Button>
        <Button color="inherit" href="#works">Works</Button>
        <Button color="inherit" href="#skills">Skills</Button>
        <Button color="inherit" href="#contacts">Contacts</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import styles from './Header.module.scss';
import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = (
    <>
      <Button color="inherit" onClick={() => scrollToSection('top')}>Top</Button>
      <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
      <Button color="inherit" onClick={() => scrollToSection('services')}>Services</Button>
      <Button color="inherit" onClick={() => scrollToSection('history')}>History</Button>
      <Button color="inherit" onClick={() => scrollToSection('works')}>Works</Button>
      <Button color="inherit" onClick={() => scrollToSection('skills')}>Skills</Button>
      {/* 準備中 */}
      {/* <Button color="inherit" onClick={() => scrollToSection('contacts')}>Contacts</Button> */}
    </>
  );
  const drawerMenuItems = (
    <Box component="div"
      sx={{
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {menuItems}
    </Box>
  );

  const appBarMenuItems = (
    <Box component="div"
      sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, justifyContent: 'flex-end' }}>
      {menuItems}
    </Box>
  );

  return (
    <AppBar position="fixed" className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={scrollToTop}
          >
            My Portfolio
          </span>
        </Typography>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        {appBarMenuItems}
      </Toolbar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            marginTop: '56px',
            backgroundColor: 'rgba(82, 176, 213, 0.9)',
          },
        }}>
        {drawerMenuItems}
      </Drawer>
    </AppBar>
  );
}
export default Header;

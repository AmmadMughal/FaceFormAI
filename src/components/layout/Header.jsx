'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Box,Toolbar, Typography, Button, IconButton, Drawer, List, ListItemButton, ListItemText
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const NAV_ITEMS = ['home', 'about', 'contact',];

const Header = () => {
  const pathname = usePathname();
  const theme = useTheme();

  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;
      NAV_ITEMS.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  };

  const isActive = (section) => {
    if (pathname === '/') return activeSection === section;
    return section === 'home' ? pathname === '/' : pathname.includes(section);
  };

  const headerVariants = {
    initial: { y: 0, opacity: 1 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        type: 'spring',
        stiffness: 150,
        damping: 15
      }
    }),
    hover: { scale: 1.05 }
  };

  const drawerVariants = {
    open: { x: 0 },
    closed: { x: '100%' }
  };

  return (
    <motion.div initial="initial" animate="animate" variants={headerVariants}>
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1300,
          backgroundColor: 'primary.main',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}
      >
        <Toolbar>
          {/* Logo */}
          <motion.div style={{ flexGrow: 1 }} whileHover={{ scale: 1.05 }}>
            <Box
              component="div"
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              onClick={() => scrollToSection('home')}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={70}
                loading="eager"
                priority
                style={{ objectFit: 'contain' }}
              />
              
            </Box>
          </motion.div>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, alignItems: 'center' }}>
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Button
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={() => setHoveredNav(item)}
                  onMouseLeave={() => setHoveredNav(null)}
                  sx={{
                    color: '#fff',
                    fontWeight: isActive(item) ? 700 : 500,
                    position: 'relative'
                  }}
                >
                  {item.toUpperCase()}
                  <motion.div
                    animate={{
                      scaleX:
                        isActive(item) || hoveredNav === item ? 1 : 0
                    }}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      width: '80%',
                      height: 2,
                      backgroundColor: '#fff',
                      transformOrigin: 'left'
                    }}
                  />
                </Button>
              </motion.div>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <IconButton
                onClick={theme.toggleTheme}
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
                aria-label="Toggle dark mode"
              >
                {theme.isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </motion.div>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ color: '#fff' }}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                      sx: {
                        width: 240,
                        backgroundColor: 'primary.main',
                        color: '#fff'
                      }
                    }}
                    ModalProps={{
                      keepMounted: false,
                      disablePortal: true,
                      disableScrollLock: false,
                      hideBackdrop: false
                    }}
                    transitionDuration={{
                      enter: 300,
                      exit: 300
                    }}
                  >
                    <Box sx={{ pt: 8, px: 3 }}>
                      <List>
                        {NAV_ITEMS.map((item) => (
                          <ListItemButton
                            key={item}
                            selected={isActive(item)}
                            onClick={() => {
                              scrollToSection(item);
                              handleDrawerToggle();
                            }}
                            sx={{ borderRadius: 2 }}
                          >
                            <ListItemText primary={item.toUpperCase()} />
                          </ListItemButton>
                        ))}
                        
                        {/* Dark Mode Toggle in Mobile Menu */}
                        <ListItemButton
                          onClick={() => {
                            theme.toggleTheme();
                            handleDrawerToggle();
                          }}
                          sx={{ 
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {theme.isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                            <ListItemText primary={theme.isDarkMode ? 'LIGHT MODE' : 'DARK MODE'} />
                          </Box>
                        </ListItemButton>
                      </List>
                    </Box>
                  </Drawer>
          </Box>
        </Toolbar>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ scaleX: scrolled ? 1 : 0 }}
          style={{
            height: 2,
            backgroundColor: '#fff',
            transformOrigin: 'left'
          }}
        />
      </Box>
    </motion.div>
  );
};

export default Header;

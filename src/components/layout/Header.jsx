'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  // Check if current path matches the section
  const isActive = (section) => {
    return activeSection === section || 
           (section === 'home' && pathname === '/') ||
           (section !== 'home' && pathname.includes(section));
  };

  return (
    <Box 
      component="header"
      sx={{ 
        backgroundColor: '#1b5e20',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1300,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Logo
        </Typography>
        <Box sx={{ 
          display: { 
            xs: 'none',
            sm: 'flex' 
          }, 
          gap: 2, 
          mr: 2 
        }}>
          <Button 
            onClick={() => scrollToSection('home')}
            sx={{ 
              color: 'white',
              fontSize: {
                xs: '0.875rem',
                sm: '1rem'
              },
              position: 'relative',
              '&:after': isActive('home') ? {
                content: '""',
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                borderRadius: '2px'
              } : {}
            }}
          >
            Home
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            sx={{ 
              color: 'white',
              fontSize: {
                xs: '0.875rem',
                sm: '1rem'
              },
              position: 'relative',
              '&:after': isActive('about') ? {
                content: '""',
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                borderRadius: '2px'
              } : {}
            }}
          >
            About
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            sx={{ 
              color: 'white',
              fontSize: {
                xs: '0.875rem',
                sm: '1rem'
              },
              position: 'relative',
              '&:after': isActive('contact') ? {
                content: '""',
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '3px',
                backgroundColor: 'white',
                borderRadius: '2px'
              } : {}
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Header;

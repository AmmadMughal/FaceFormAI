'use client';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const theme = createTheme();

const HeroSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box  
        sx={{
          height: {
            xs: '60vh',
            sm: '70vh',
            md: '80vh'
          },
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/FaceAi.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: {
            xs: 'scroll',
            md: 'fixed'
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth={{
          xs: 'sm',
          sm: 'md',
          md: 'md'
        }}>
          <Typography
            variant={{
              xs: 'h4',
              sm: 'h3',
              md: 'h2'
            }}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            Welcome to FaceFormAI
          </Typography>
          <Typography
            variant={{
              xs: 'body1',
              sm: 'h6',
              md: 'h5'
            }}
            component="p"
            gutterBottom
            sx={{
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            }}
          >
            FaceForm AI is an AI-powered app that analyzes facial 
            features and provides personalized improvement tips,
             exercises, and style suggestions.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  '&:hover': {
                    backgroundColor: '#3aeb45',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease'
                  },
                  '&:active': {
                    backgroundColor: '#0d47a1',
                    transform: 'translateY(0)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }
                }}
              > 
                Get Started
              </Button>
            </Link>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: '#3aeb45',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                },
                '&:active': {
                  backgroundColor: 'rgba(25, 118, 210, 0.12)',
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroSection; 

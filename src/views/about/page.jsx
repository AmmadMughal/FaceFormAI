'use client';

import React from 'react';
import {
  Box,  Container,Typography,Grid,Paper,Button,Stack,Chip
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FaceIcon from '@mui/icons-material/Face';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { introductionText, howItWorks } from '@/utils/aboutData';

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FAFAFB',
        minHeight: '100vh',
        py: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip label="Phase 1 Released" color="primary" sx={{ mb: 2 }} />
          <Typography
            variant={{
              xs: 'h3',
              sm: 'h2'
            }}
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(45deg, #4F46E5 30%, #8B5CF6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'black',
              backgroundClip: 'text'
            }}
          >
            FaceForm AI
          </Typography>
          <Typography variant={{
            xs: 'h6',
            sm: 'h5'
 }} color="text.secondary" sx={{ 
            maxWidth: {
              xs: '90%',
              sm: 800
            }, 
            mx: 'auto', 
            mb: 4
          }}>
            AI-powered facial assessment and improvement designed to help you understand and enhance your facial appearance naturally.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              background: '#1b5e20',
              color: 'white',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              mt: 5,
              '&:hover': {
                background: '#2e7d32',
                transform: 'translateY(-2px)',
                boxShadow: 4
              }
            }}
          >
            Start Your Analysis
          </Button>
        </Box>

        {/* Introduction Section */}
        <Paper elevation={0} sx={{ p: 4, mb: 8, borderRadius: 3, background: 'linear-gradient(135deg, #f6f5ff 0%, #f0f9ff 100%)', border: '1px solid #e0e7ff' }}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            What is FaceForm AI?
          </Typography>
          {introductionText.map((paragraph, index) => (
            <Typography key={index} variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
              {paragraph}
            </Typography>
          ))}
        </Paper>

        {/* How It Works */}
        <Box sx={{ mb:8, backgroundColor: '#FAFAFB', py: 6, borderRadius: 3 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mb: 6, textAlign: 'center', fontWeight: 700 }}>
              How It Works
            </Typography>
            <Grid container spacing={{
              xs: 2,
              sm: 3,
              md: 4
            }} justifyContent="center" alignItems="stretch">
              {howItWorks.map((step, index) => {
                const icons = [
                  <PsychologyIcon key="psychology" sx={{ fontSize: 40, color: '#1b5e20' }} />, 
                  <FaceIcon key="face" sx={{ fontSize: 40, color: '#1b5e20' }} />, 
                  <SecurityIcon key="security" sx={{ fontSize: 40, color: '#1b5e20' }} />, 
                  <TrendingUpIcon key="trending" sx={{ fontSize: 40, color: '#1b5e20' }} />
                ];
                return (
                  <Grid size={{
                    xs: 12,
                    sm: 6,
                    md: 6,
                    lg: 3
                  }} key={index} sx={{ display: 'flex' }}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: {
                          xs: 3,
                          sm: 4
                        },
                        borderRadius: 3,
                        backgroundColor: 'white',
                        height: {
                          xs: 'auto',
                          sm: '320px',
                          md: '320px',
                          lg: '320px'
                        },
                        width: {
                          xs: '100%',
                          sm: '500px'
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: '#F3F4F6',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3
                        }}
                      >
                        {React.cloneElement(icons[index], { key: `icon-${index}` })}
                      </Box>
                      <Typography variant="h3" sx={{ fontSize: '2rem', fontWeight: 700, mb: 2, color: '#1b5e20' }}>
                        {step.step}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#1F2937' }}>
                        {step.title}
                      </Typography>
                      <Box sx={{ 
                        height: '80px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        width: '100%',
                        overflow: 'hidden'
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: '#6B7280', 
                            lineHeight: 1.4,
                            textAlign: 'center',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {step.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        {/* Value Proposition */}
        <Paper elevation={0} sx={{ p: 5, borderRadius: 3, textAlign: 'center', background: '#1b5e20', color: 'white' }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 700 }}>
            Start Your Facial Improvement Journey Today
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
            Join thousands of users who have transformed their appearance with personalized AI guidance
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: 2, backgroundColor: 'white', color: 'black', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              Get Started Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, borderRadius: 2, borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
            >
              View Demo
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;

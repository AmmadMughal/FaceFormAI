import React from 'react';
import { Box, Container, Grid, Typography, IconButton, List, ListItem, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube, Phone, Email, LocationOn, Copyright } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c1d1f',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Quick Links Section */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <List dense>
              {[
                { text: 'Home', href: '#home' },
                { text: 'About Us', href: '#about' },
                { text: 'Contact', href: '#contact' }
              ].map((item) => (
                <ListItem key={item.text} disableGutters>
                  <Link 
                    href={item.href} 
                    color="grey.300" 
                    underline="hover"
                    sx={{ 
                      '&:hover': { 
                        color: 'secondary.main',
                        transform: 'translateX(5px)',
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Social Media Section */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" gap={3} flexWrap="wrap">
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1877F2',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#1DA1F2',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#E4405F',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#0A66C2',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                aria-label="YouTube"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#FF0000',
                    transform: 'translateY(-3px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          color="grey.400"
          sx={{ mt: 4, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
        >
          <Box display="flex" alignItems="center">
            <Copyright sx={{ fontSize: 14, mr: 0.5 }} />
            <Typography variant="body2">
              2025 Your Company. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

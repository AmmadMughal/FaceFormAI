'use client';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';
import { keyframes } from '@mui/material/styles';

const borderAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        padding: 2,
        paddingBottom: 20,
        boxShadow: '0 20px 40px rgba(58, 235, 69, 0.15), 0 10px 20px rgba(58, 235, 69, 0.1)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: {
            xs: '100%',
            sm: 650,
            md: 780,
            lg: 900
          },
          borderRadius: 3,
          padding: '3px',
          backgroundImage: 'linear-gradient(45deg, #3aeb45, #4F46E5, #3aeb45, #4F46E5, #3aeb45)',
          backgroundSize: '400% 400%',
          animation: `${borderAnimation} 4s linear infinite`
        }}
      >
        <Paper
          component="form"
          onSubmit={handleSubmit}
          elevation={6}
          sx={{
            width: '100%',
            padding: {
              xs: 2,
              sm: 2.5,
              md: 3
            },
            borderRadius: 2.5,
            backgroundColor: 'background.paper',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              marginBottom: 1
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            sx={{ marginBottom: 3 }}
          >
            Fill out the form below and we&apos;ll get back to you soon
          </Typography>

          <Stack spacing={2.5}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              fullWidth
              required
              variant="outlined"
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              fullWidth
              required
              variant="outlined"
            />

            <TextField
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              size="small"
              fullWidth
              required
              variant="outlined"
            />

            <Button
              type="submit"
              variant="contained"
              size="medium"
              endIcon={<SendIcon />}
              fullWidth
              sx={{
                marginTop: 1,
                paddingY: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '0.95rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { facialFeatures } from '@/utils/featuresData';

const FacialAnalysisFeatures = () => {
  return (
    <Box sx={{ 
      py: 4, 
      backgroundColor: ' #FAFAFB',
      width: '100%'
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 9 }}>
          <Typography variant="h3" component="h2" color="text.black" gutterBottom sx={{ fontWeight: 'bold' }}>
            AI Facial Analysis Features 
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ 
            maxWidth: 800, 
            mx: 'auto', 
            mb: 5,
            textAlign: 'center',
            textJustify: 'inter-word'
          }}>
            Detailed analysis of your facial features with personalized improvement suggestions
          </Typography>
        </Box>

        {/* Features Grid - Better space utilization */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)'
          },
          gap: {
            xs: 3,
            sm: 3,
            md: 3,
            lg: 4
          },
          width: '100%',
          px: {
            xs: 1,
            sm: 1,
            md: 1
          }
        }}>
          {facialFeatures.map((feature, index) => (
            <Card 
              key={index}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardContent sx={{ 
                p: {
                  xs: 2,
                  sm: 2,
                  md: 2.9
                }, 
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                textAlign: 'left',
                minHeight: {
                  xs: 200,
                  sm: 220,
                  md: 260
                }
              }}>
                <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center', width: '100%' }}>
                  {feature.icon}
                </Box>
                
                <Typography variant="h6" component="h3" gutterBottom sx={{ 
                  fontWeight: 'bold', 
                  textAlign: 'center',
                  width: '100%',
                  mb: 1
                }}>
                  {feature.title}
                </Typography>
              
                <Typography variant="body2" color="text.secondary" sx={{ 
                  textAlign: 'justify',
                  textJustify: 'inter-word',
                  lineHeight: 1.5,
                  flexGrow: 1,
                  fontSize: '0.875rem'
                }}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FacialAnalysisFeatures;
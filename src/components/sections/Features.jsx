'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { facialFeatures } from '@/utils/featuresData';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  }
};

const headerVariants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5
    }
  }
};

const iconVariants = {
  initial: { 
    rotate: 0,
    scale: 1 
  },
  hover: { 
    rotate: [0, -10, 10, -5, 5, 0],
    scale: [1, 1.1, 1.05, 1.1, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const cardHoverVariants = {
  initial: { 
    scale: 1,
    rotateX: 0,
    rotateY: 0 
  },
  hover: { 
    scale: 1.03,
    rotateX: 2,
    rotateY: 2,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

const rippleEffect = {
  initial: { 
    scale: 0.8, 
    opacity: 0 
  },
  hover: { 
    scale: 1.2, 
    opacity: 0.1,
    transition: { 
      duration: 0.6 
    }
  }
};

const FloatingAnimation = {
  initial: { 
    y: 0 
  },
  animate: { 
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const FacialAnalysisFeatures = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [gridRef, gridInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <Box sx={{ 
      py: 4, 
      backgroundColor: 'background.default',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          filter: 'blur(60px)',
          zIndex: 0
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.02, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          filter: 'blur(50px)',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section with animations */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Box sx={{ textAlign: 'center', mb: 9, position: 'relative' }}>
            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                variants={FloatingAnimation}
                initial="initial"
                animate="animate"
                style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: theme.palette.primary.main,
                  opacity: 0.3,
                  left: `${20 + i * 30}%`,
                  top: '-10px'
                }}
              />
            ))}
            
            <motion.div variants={headerVariants}>
              <Typography 
                variant="h3" 
                component="h2" 
                color="text.black" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '25%',
                    width: '50%',
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                    borderRadius: '2px'
                  }
                }}
              >
                AI Facial Analysis Features 
              </Typography>
            </motion.div>
            
            <motion.div variants={subtitleVariants}>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 800, 
                  mx: 'auto', 
                  mb: 5,
                  textAlign: 'center',
                  textJustify: 'inter-word',
                  position: 'relative',
                  padding: '20px 0'
                }}
              >
                Detailed analysis of your facial features with personalized improvement suggestions
                {/* Underline animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={headerInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '25%',
                    width: '50%',
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.light}, transparent)`,
                    transformOrigin: 'left',
                    borderRadius: '1px'
                  }}
                />
              </Typography>
            </motion.div>
          </Box>
        </motion.div>

        {/* Features Grid with stunning animations */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
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
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover="hover"
                initial="initial"
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    borderRadius: '16px',
                    background: `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.grey[50]})`,
                    boxShadow: `0 4px 20px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.08)'}`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.5s ease'
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)'
                    },
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.15)'}`,
                    },
                  }}
                >
                  {/* Ripple effect on hover */}
                  <motion.div
                    variants={rippleEffect}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '100%',
                      height: '100%',
                      background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, transparent 70%)`,
                      borderRadius: '16px',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 0
                    }}
                  />
                  
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
                    },
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Icon with animation */}
                    <motion.div
                      variants={iconVariants}
                      style={{ 
                        mb: 16, 
                        display: 'flex', 
                        justifyContent: 'center', 
                        width: '100%' 
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          padding: '12px',
                          borderRadius: '12px',
                          background: `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {feature.icon}
                      </motion.div>
                    </motion.div>
                    
                    {/* Title with typing effect */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                      style={{ width: '100%' }}
                    >
                      <Typography 
                        variant="h6" 
                        component="h3" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 'bold', 
                          textAlign: 'center',
                          width: '100%',
                          mb: 2,
                          position: 'relative',
                          color: theme.palette.text.primary,
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
                            left: '40%',
                            width: '20%',
                            height: '2px',
                            background: theme.palette.primary.main,
                            transform: 'scaleX(0)',
                            transition: 'transform 0.3s ease'
                          }
                        }}
                        className="card-title"
                      >
                        {feature.title}
                      </Typography>
                    </motion.div>
                    
                    {/* Description with fade-in effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.4 }}
                      style={{ flexGrow: 1, width: '100%' }}
                    >
                      <Typography 
                        variant="body2" 
                        color="text.secondary" 
                        sx={{ 
                          textAlign: 'justify',
                          textJustify: 'inter-word',
                          lineHeight: 1.6,
                          flexGrow: 1,
                          fontSize: '0.9rem',
                          position: 'relative'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </motion.div>
                    
                    {/* Learn More Button with animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                      style={{ 
                        width: '100%', 
                        marginTop: '16px',
                        textAlign: 'center' 
                      }}
                    >
                      {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          padding: '8px 24px',
                          borderRadius: '25px',
                          border: 'none',
                          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          color: 'white',
                          fontWeight: '600',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      > */}
                        {/* <span style={{ position: 'relative', zIndex: 2 }}>
                          Learn More
                        </span> */}
                        <motion.div
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '0%' }}
                          transition={{ duration: 0.4 }}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                            zIndex: 1
                          }}
                        />
                    
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={gridInView ? { opacity: 1, width: '100%' } : { opacity: 0, width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            height: '2px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            marginTop: '60px',
            borderRadius: '1px',
            maxWidth: '400px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        />
      </Container>
    </Box>
  );
};

export default FacialAnalysisFeatures;


"use client";

import React, { useEffect, useRef } from "react";
import { Box, Container, Typography, Grid, Paper, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FaceIcon from "@mui/icons-material/Face";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { introductionText, howItWorks } from "@/utils/aboutData";
import { motion, useAnimation, useInView } from "framer-motion";

// Generate random positions for floating particles
const particlePositions = Array.from({ length: 8 }, () => Math.random() * 100 - 50);

const About = () => {
  // Animation controls and refs
  const controls = useAnimation();
  const ref = useRef(null);
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const stepsRef = useRef(null);
  const ctaRef = useRef(null);

  // View detection hooks
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isHeroInView = useInView(heroRef, { once: true });
  const isIntroInView = useInView(introRef, { once: true, amount: 0.3 });
  const isStepsInView = useInView(stepsRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true });

  // Animation triggers
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hidden: { rotate: -180, scale: 0 },
    visible: (i) => ({
      rotate: 0,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        type: "spring",
        stiffness: 150,
        damping: 15
      }
    }),
    hover: {
      rotate: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15 + 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const pulseVariants = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(79, 70, 229, 0.4)",
        "0 0 0 10px rgba(79, 70, 229, 0)",
        "0 0 0 0 rgba(79, 70, 229, 0)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Step icons array
  const stepIcons = [
    <PsychologyIcon key="psychology" sx={{ fontSize: 40, color: "primary.main" }} />,
    <FaceIcon key="face" sx={{ fontSize: 40, color: "primary.main" }} />,
    <SecurityIcon key="security" sx={{ fontSize: 40, color: "primary.main" }} />,
    <TrendingUpIcon key="trending" sx={{ fontSize: 40, color: "primary.main" }} />,
  ];

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        py: 8,
        position: "relative",
        overflow: "hidden"
      }}
      ref={ref}
    >
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #4F46E5, #8B5CF6)",
          filter: "blur(60px)",
          zIndex: 0
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.02 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8B5CF6, #4F46E5)",
          filter: "blur(50px)",
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }} ref={heroRef}>
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
          >
            <Typography
              variant={{ xs: "h3", sm: "h2" }}
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                background: "linear-gradient(45deg, #4F46E5 30%, #8B5CF6 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "black",
                backgroundClip: "text",
                position: "relative",
                display: "inline-block"
              }}
            >
              FaceForm AI
              
              {/* Animated Underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isHeroInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "15%",
                  width: "70%",
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #3aeb45, transparent)",
                  borderRadius: "2px",
                  transformOrigin: "center"
                }}
              />
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant={{ xs: "h6", sm: "h5" }}
              color="text.secondary"
              sx={{
                maxWidth: { xs: "90%", sm: 800 },
                mx: "auto",
                mb: 4
              }}
            >
              AI-powered facial assessment and improvement designed to help you
              understand and enhance your facial appearance naturally.
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={buttonVariants}
            transition={{ delay: 0.4 }}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              variants={pulseVariants}
              animate="animate"
              style={{ display: "inline-block", borderRadius: "8px" }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowForwardIcon />
                  </motion.div>
                }
                component="a"
                href="https://play.google.com/store/apps/details?id=com.whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  backgroundColor: "primary.main",
                  color: "white",
                  fontWeight: 600,
                  mt: 5,
                  position: "relative",
                  overflow: "hidden",
                  '&:hover': {
                    backgroundColor: '#1565c0',
                    boxShadow: '0 8px 20px rgba(79, 70, 229, 0.3)',
                  },
                  '&:active': {
                    backgroundColor: '#3aeb45',
                  }
                }}
              >
                <motion.span
                  variants={shimmerVariants}
                  animate="animate"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    backgroundSize: "200% 100%",
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%"
                  }}
                />
                Start Your Analysis
              </Button>
            </motion.div>
          </motion.div>
        </Box>

        {/* Introduction Section */}
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={isIntroInView ? "visible" : "hidden"}
          variants={slideInRightVariants}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 8,
              borderRadius: 3,
              background: "linear-gradient(135deg, #f6f5ff 0%, #f0f9ff 100%)",
              border: "1px solid #3aeb45",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Animated Corner Accent */}
            <motion.div
              initial={{ rotate: -45, scale: 0 }}
              animate={isIntroInView ? { rotate: -45, scale: 1 } : { rotate: -45, scale: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                top: -10,
                right: -10,
                width: "60px",
                height: "60px",
                background: "linear-gradient(45deg, #3aeb45)",
                clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
              }}
            />
            
            <motion.div
              initial="hidden"
              animate={isIntroInView ? "visible" : "hidden"}
              variants={fadeInVariants}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, position: "relative", pr: 4 }}>
                What is FaceForm AI?
                
                {/* Dot Animation */}
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#3aeb45",
                    marginLeft: "8px",
                    verticalAlign: "middle"
                  }}
                />
              </Typography>
            </motion.div>
            
            {introductionText.map((paragraph, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={paragraphVariants}
                initial="hidden"
                animate={isIntroInView ? "visible" : "hidden"}
              >
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ 
                    fontSize: "1.1rem",
                    position: "relative",
                    pl: 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: '12px',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#4F46E5',
                      opacity: 0.6
                    }
                  }}
                >
                  {paragraph}
                </Typography>
              </motion.div>
            ))}
          </Paper>
        </motion.div>

        {/* How It Works Section */}
        <Box
          sx={{
            mb: 8,
            backgroundColor: "background.default",
            py: 6,
            borderRadius: 3,
          }}
          ref={stepsRef}
        >
          <Container maxWidth="lg">
            <motion.div
              initial="hidden"
              animate={isStepsInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
            >
              <Typography
                variant="h3"
                sx={{ 
                  mb: 6, 
                  textAlign: "center", 
                  fontWeight: 700,
                  position: "relative",
                  display: "inline-block",
                  left: "50%",
                  transform: "translateX(-50%)"
                }}
              >
                How It Works
                
                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isStepsInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #3aeb45)",
                    borderRadius: "2px"
                  }}
                />
              </Typography>
            </motion.div>
            
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 4 }}
              justifyContent="center"
              alignItems="stretch"
            >
              {howItWorks.map((step, index) => (
                <Grid
                  size={{ xs: 12, sm: 6, md: 6, lg: 3 }}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isStepsInView ? "visible" : "hidden"}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    style={{ width: "100%" }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: { xs: 3, sm: 4 },
                        borderRadius: 3,
                        backgroundColor: "white",
                        height: "auto",
                        minHeight: { sm: "320px" },
                        width: "100%",
                        maxWidth: { lg: 360 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        boxSizing: "border-box",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: 4,
                        },
                      }}
                    >
                      {/* Animated Icon */}
                      <motion.div
                        custom={index}
                        variants={iconVariants}
                        initial="hidden"
                        animate={isStepsInView ? "visible" : "hidden"}
                        whileHover="hover"
                      >
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            backgroundColor: "action.hover",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                            position: "relative"
                          }}
                        >
                          {React.cloneElement(stepIcons[index], {
                            key: `icon-${index}`,
                          })}
                          
                          {/* Ring Animation */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.5
                            }}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              borderRadius: "50%",
                              border: "2px solid #4F46E5"
                            }}
                          />
                        </Box>
                      </motion.div>
                      
                      {/* Step Number */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isStepsInView ? { 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.1 + 0.4 }
                        } : { opacity: 0 }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontSize: "2rem",
                            fontWeight: 700,
                            mb: 2,
                            color: "primary.main",
                          }}
                        >
                          {step.step}
                        </Typography>
                      </motion.div>
                      
                      {/* Step Title */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isStepsInView ? { 
                          opacity: 1,
                          transition: { delay: index * 0.1 + 0.5 }
                        } : { opacity: 0 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ 
                            mb: 2, 
                            fontWeight: 600, 
                            color: "text.primary",
                            minHeight: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          {step.title}
                        </Typography>
                      </motion.div>
                      
                      {/* Step Description */}
                      <Box sx={{
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        overflow: "hidden",
                      }}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isStepsInView ? { 
                            opacity: 1,
                            transition: { delay: index * 0.1 + 0.6 }
                          } : { opacity: 0 }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                              lineHeight: 1.4,
                              textAlign: "center",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {step.description}
                          </Typography>
                        </motion.div>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={scaleInVariants}
        >
          <Paper
            elevation={0}
            sx={{
              p: 5,
              borderRadius: 3,
              textAlign: "center",
              backgroundColor: "primary.main",
              color: "white",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Floating Particles */}
            {particlePositions.map((randomX, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={isCtaInView ? { 
                  opacity: [0, 0.5, 0],
                  y: -100,
                  x: randomX
                } : { opacity: 0 }}
                transition={{
                  delay: i * 0.2,
                  duration: 2,
                  ease: "easeOut"
                }}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.8)",
                  bottom: "20px",
                  left: `${10 + i * 10}%`
                }}
              />
            ))}
            
            <motion.div
              initial="hidden"
              animate={isCtaInView ? "visible" : "hidden"}
              variants={fadeInVariants}
            >
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 700, position: "relative", zIndex: 1 }}>
                Start Your Facial Improvement Journey Today
              </Typography>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isCtaInView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h6"
                sx={{ 
                  mb: 4, 
                  opacity: 0.9, 
                  maxWidth: 600, 
                  mx: "auto",
                  position: "relative",
                  zIndex: 1 
                }}
              >
                Join thousands of users who have transformed their appearance with
                personalized AI guidance
              </Typography>
            </motion.div>
            
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* Additional buttons can be added here if needed */}
            </Stack>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
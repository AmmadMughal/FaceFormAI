const smallPAdding=10;
const mediumPadding=20;
const largePadding=30;
const maxWidth="1200px";
const fontSize="16px";

// Light mode colors - User Specifications
const colors = {
  primary: '#6366F1', // Soft Indigo - Primary buttons, actions
  primaryDark: '#6366F1', // Same as primary
  secondary: '#4ADE80', // Turquoise Green - Accent, success states
  surface: '#F3F4F6', // Light Lavender Gray - Cards, panels
  paper: '#FAFAFB', // Almost White - Background
  textOnPrimary: '#ffffff', // White text on primary
  textPrimary: '#1F2937', // Charcoal Gray - Primary text
  textMuted: '#6B7280', // Slate Gray - Secondary text
  highlight: '#FCA5A5', // Peach Pink - Highlights, errors
};

// Dark mode colors - User Specifications
const darkColors = {
  primary: '#6366F1', // Accent (Indigo)
  primaryDark: '#6366F1',
  secondary: '#4ADE80', // Accent (Green)
  surface: '#2A2E45', // Slate Blue - Surface
  paper: '#1E1E2E', // Dark Charcoal - Background
  textOnPrimary: '#1E1E2E', // Dark text on primary
  textPrimary: '#F3F4F6', // Soft White - Primary text
  textMuted: '#9CA3AF', // Muted text for dark mode
  highlight: '#FCA5A5', // Peach Pink - Highlights, errors (same as light)
};

const backgroundColorMain=colors.primary;
const backgroundColorDark=colors.primaryDark;
const   primaryMain= colors.primary
const   secondaryMain=colors.secondary

export { smallPAdding, mediumPadding, largePadding, maxWidth, fontSize, colors, darkColors, backgroundColorMain, backgroundColorDark, primaryMain,  secondaryMain };

// "#1976d2"
// #9c27b0
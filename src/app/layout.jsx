import Header from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { ThemeProvider } from '@/context/ThemeContext';
import HeroSection from '@/components/sections/HeroSection';
import Features from '@/components/sections/Features';
import HomePage from '@/app/page';
import About from '@/views/about/page';
import ContactForm from '@/views/contact/page';
import Box from '@mui/material/Box';

export const metadata = {
  title: 'My Next App',
  description: 'Next.js with Material UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeRegistry>
            <Header />
            <Box id="home">
               <HomePage/>
              <HeroSection />
              <Features />
            </Box>
            <Box 
              id="about" 
              sx={{ 
                pt: 0,
                
              }}
            >
             
             <About/>
            </Box>
            <Box 
              id="contact" 
              sx={{ 
                pt: 0,
        
              }}
            >
             <ContactForm/>
            </Box>
             <Box 
              id="footer" 
              sx={{ 
                pt: 0
              }}
            >
             <Footer/>
            </Box>
            {children}
           
          </ThemeRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}

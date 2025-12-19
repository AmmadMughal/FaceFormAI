import dynamic from 'next/dynamic';
import ThemeRegistry from '@/theme/ThemeRegistry';
import HeroSection from '@/components/sections/HeroSection';
import Features from '@/components/sections/Features';

const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
  loading: () => <div style={{ height: '64px', backgroundColor: '#1b5e20' }}></div>
});

export const metadata = {
  title: 'My Next App',
  description: 'Next.js with Material UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
           <HeroSection />
           <Features />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}




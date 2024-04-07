import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './ui/navbar/navbar';
import Footer from './ui/footer';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: '%s | Daniel Song Yu', default: 'Daniel Song Yu' },
  description: "Daniel Song Yu's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-slate-100'>
      <body className={inter.className}>
        <ThemeProvider defaultTheme='light' attribute='class'>
          <main className='dark:bg-gray-800 w-full'>
            <Navbar />
            <div className='relative'>
              <header className='absolute bottom-6 left-0 right-0 bg-white h-screen -z-10' />
            </div>
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

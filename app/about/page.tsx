import { Metadata } from 'next/types';
import About from '../ui/about/about';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;

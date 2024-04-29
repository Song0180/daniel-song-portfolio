import { Metadata } from 'next/types';
import Experience from '../ui/experience/experience';

export const metadata: Metadata = {
  title: 'Experience',
};

const ExperiencePage = () => {
  return <Experience />;
};

export default ExperiencePage;

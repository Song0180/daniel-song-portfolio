import { Metadata } from 'next/types';
import Projects from '../ui/projects/projects';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;

import { Metadata } from 'next/types';
import Blogs from '../ui/blogs/blogs';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectsPage = () => {
  return <Blogs />;
};

export default ProjectsPage;

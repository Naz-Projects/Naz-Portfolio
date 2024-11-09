import React from 'react';
import { PROJECTS } from '../constants';
import Card from './Card';
import motion from 'framer-motion';
const containerVariants = {
  hidden: { opacity: 0, y: -2 },
  visibile: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="mt-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="flex flex-wrap justify-center py-8">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link="#"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

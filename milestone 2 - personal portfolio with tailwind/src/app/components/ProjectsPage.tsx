
'use client'
import { motion } from 'framer-motion';
import Navigation from './Navigation';

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="bg-blue-600 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  const projects = [
    {
      title: "Persnol Portfolio",
      description: "Description of project 1",
      technologies: ["NEXT.js", "Tailwind", "Typescript"],
      image: "../project1.png"
    },
    {
      title: "Resume Builder",
      description: "COMING SOON",
      technologies: ["HTML", "CSS", "Typescript"],
      image: "../project2.webp"
    },
    {
      title: "Portfolio",
      description: "Description of project 1",
      technologies: ["React", "Tailwind", "Typescript"],
      image: "../project3.png"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

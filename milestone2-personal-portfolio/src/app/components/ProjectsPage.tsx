'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from './Navigation';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
  >
    <div className="relative w-full h-40">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={`${tech}-${techIndex}`}
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
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "This portfolio offers a look into my professional journey as a Front Sales Executive and web developer.",
      technologies: ["NEXT.js", "Tailwind", "TypeScript"],
      image: "/project1.png" 
    },
    {
      title: "Resume Builder",
      description: "COMING SOON",
      technologies: ["HTML", "CSS", "TypeScript"],
      image: "/project2.webp" 
    },
    {
      title: "Portfolio",
      description: "Designed and developed a personalized website for Saba, a social media influencer, to elevate her online presence.",
      technologies: ["React", "Tailwind", "TypeScript"],
      image: "/project3.png" 
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
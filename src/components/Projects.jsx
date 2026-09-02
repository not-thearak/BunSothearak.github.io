import React from 'react';
import { motion } from 'framer-motion';
import {  ExternalLink, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Computer Shop Platform',
      description: 'Full-stack e-commerce,admin dashboard, and real-time inventory management.',
      tech: ['Html', 'Laravel', 'MySQL', 'PHP', 'TailwindCSS'],
      type: 'Web',
      icon: Globe,
      github: 'https://github.com/not-thearak/Computer-shop',
      live: 'https://github.com/not-thearak/Computer-shop',
    },
    {
      title: 'Flutter Front-End for Skincare E-commerce',
      description: 'Flutter front-end for skincare e-commerce app with product browsing, cart, and user authentication.',
      tech: ['Flutter', 'Dart'],
      type: 'Mobile',
      icon: Smartphone,
      // github: 'https://github.com',
      live: 'https://github.com/not-thearak/Skincare-Project',
    },
    {
      title: 'POS mobile',
      description: 'Web application that uses OpenAI API to generate content, images, and code snippets with user authentication and credit system.',
      tech: ['Flutter', 'Dart', 'Laravel', 'Mysql'],
      type: 'Mobile',
      icon: Smartphone,
      // github: 'https://github.com',
      live: 'https://github.com/not-thearak/pos-mobile',
    },
    // {
    //   title: 'Health Tracker Mobile',
    //   description: 'Cross-platform health and fitness tracking app with workout plans, nutrition logging, and progress analytics.',
    //   tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Chart.js'],
    //   type: 'Mobile',
    //   icon: Smartphone,
    //   // github: 'https://github.com',
    //   live: 'https://example.com',
    // }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in web and mobile development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-48 gradient-bg flex items-center justify-center">
                <project.icon size={48} className="text-white/80" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <project.icon size={14} />
                    <span>{project.type}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    {/* <Github size={18} /> Code */}
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />See detail in GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPython, SiMongodb, SiPostgresql, SiFirebase,
  SiDocker, SiGit, SiTypescript, SiFigma,
  SiFlutter,
  SiMysql,
  SiLaravel,
  SiHtml5,
  SiCss,
  SiGithub,
  SiPhp,
  SiDart,
  SiJavascript
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'Javasript', icon: SiJavascript, level: 80 },
        { name: 'PHP', icon: SiPhp, level: 90},
        { name: 'Dart', icon: SiDart, level: 90 },
        
      ]
    },
    {
      title: 'Web Development',
      skills: [
        {name: 'HTML', icon: SiHtml5, level: 90},
        {name: 'CSS', icon: SiCss, level: 90},
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 70 },
        { name: 'Laravel', icon: SiLaravel, level: 88 },
        { name: 'Reactjs', icon: SiReact, level: 30 },
      ]
    },
    {
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', icon: SiFlutter, level: 85 },
        { name: 'Firebase', icon: SiFirebase, level: 30 },
      ]
    },
    {
      title: 'Tools & Database',
      skills: [
        { name: 'Docker', icon: SiDocker, level: 50 },
        { name: 'Git', icon: SiGit, level: 88 },
        { name: 'Github', icon: SiGithub, level: 85 },
        { name: 'Figma', icon: SiFigma, level: 80 },
        { name: 'MySql', icon: SiMysql, level: 80 },
        { name: 'Posgresql', icon: SiPostgresql, level: 70}
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon size={20} className="text-primary" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIdx * 0.1 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
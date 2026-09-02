import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '0', label: ' Experience' },
    { icon: Users, value: '3+', label: 'Projects Completed' },
    // { icon: Clock, value: '100%', label: 'Client Satisfaction' },
    // { icon: Coffee, value: '∞', label: 'Coffee Consumed' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
               Motivated Software Development student with strong interest in web and mobile application development. Experienced in building small full-stack and UI-focused projects using Laravel, MySQL, Flutter, and JavaScript. Passionate about learning modern technologies, improving problem-solving skills, and gaining real-world experience through an IT Internship opportunity.
              </p>
              
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700"
              >
                <stat.icon size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
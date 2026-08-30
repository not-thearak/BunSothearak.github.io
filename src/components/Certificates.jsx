import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Calendar, X, ZoomIn } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Basic / Advance C / C++ / OOP & Project Courses",
      issuer: "Basic Programming",
      date: "15, 03, 2024",
      description: "Comprehensive courses covering C and C++ programming, object-oriented programming principles, and project development skills.",
      skills: ["C", "C++", "OOP", "Project Development"],
      credentialId: "ABC123DEF456",
      credentialUrl: "https://coursera.org/verify/professional-cert/your-id",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuDk-qoyAfNPAEicpuVr9hfv4n-WWpYVbew&s",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "HTML / CSS / JavaScript / Bootstrap / Jquery & Project Courses",
      issuer: "Frontend Development",
      date: "15, 08, 2024",
      description: "In-depth courses on frontend web development, covering HTML, CSS, JavaScript, Bootstrap, jQuery, and practical project experience.",
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
      credentialId: "FRONTEND-123456",
      credentialUrl: "https://coursera.org/verify/professional-cert/your-id",
      image: "https://placehold.co/600x400/1e293b/6366f1?text=Frontend+Certificate",
      color: "from-orange-500/20 to-yellow-500/20"
    },
    {
      id: 3,
      title: "basic / Advance PHP / MySQL / Laravel & Project Courses",
      issuer: "Backend Development",
      date: "15, 02, 2025",
      description: "Mastered PHP programming, database management, Laravel framework, and project development skills.",
      skills: ["PHP", "MySQL", "Laravel", "Project Development"],
      credentialId: "BACKEND-789012",
      credentialUrl: "https://coursera.org/verify/your-id",
      image: "https://placehold.co/600x400/1e293b/6366f1?text=Backend+Certificate",
      color: "from-green-500/20 to-emerald-500/20"
    },
    // {
    //   id: 4,
    //   title: "React Native - The Practical Guide",
    //   issuer: "Academind (Udemy)",
    //   date: "2024",
    //   description: "Comprehensive mobile app development course covering React Native fundamentals, navigation, state management, and app deployment.",
    //   skills: ["React Native", "Redux", "Native Modules", "App Store Deployment"],
    //   credentialId: "UDEMY-RN-345678",
    //   credentialUrl: "https://udemy.com/certificate/your-id",
    //   image: "https://placehold.co/600x400/1e293b/6366f1?text=React+Native+Certificate",
    //   color: "from-purple-500/20 to-pink-500/20"
    // },
    // {
    //   id: 5,
    //   title: "Full-Stack Web Development Bootcamp",
    //   issuer: "App Brewery (Udemy)",
    //   date: "2023",
    //   description: "Intensive bootcamp covering MERN stack, RESTful APIs, authentication, and database design.",
    //   skills: ["MongoDB", "Express.js", "React", "Node.js"],
    //   credentialId: "UDEMY-FS-901234",
    //   credentialUrl: "https://udemy.com/certificate/your-id",
    //   image: "https://placehold.co/600x400/1e293b/6366f1?text=Full+Stack+Certificate",
    //   color: "from-red-500/20 to-rose-500/20"
    // },
    // {
    //   id: 6,
    //   title: "Professional Scrum Master I (PSM I)",
    //   issuer: "Scrum.org",
    //   date: "2024",
    //   description: "Certification demonstrating understanding of Scrum framework, agile principles, and team facilitation.",
    //   skills: ["Agile", "Scrum", "Team Management", "JIRA"],
    //   credentialId: "PSM-1234567",
    //   credentialUrl: "https://scrum.org/certificates/your-id",
    //   image: "https://placehold.co/600x400/1e293b/6366f1?text=Scrum+Certificate",
    //   color: "from-indigo-500/20 to-blue-500/20"
    // }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className={`relative h-48 bg-gradient-to-br ${cert.color}`}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Award size={20} className="text-primary" />
                    <span className="text-sm font-semibold">{cert.issuer}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{cert.description}</p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* View Button */}
                <button className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  View Details <ExternalLink size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Certificate Details */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Modal Image */}
                  <div className={`h-64 bg-gradient-to-br ${selectedCert.color} relative`}>
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Award size={16} />
                          <span>{selectedCert.issuer}</span>
                          <span>•</span>
                          <Calendar size={16} />
                          <span>{selectedCert.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">{selectedCert.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCert.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Credential ID</h4>
                      <p className="text-gray-400 text-sm font-mono">{selectedCert.credentialId}</p>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 gradient-bg px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                      >
                        Verify Certificate <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Globe,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Hero = () => {
  const roles = [
    { icon: Code2, text: 'Software Developer' },
    { icon: Globe, text: 'Web Developer' },
    { icon: Smartphone, text: 'Mobile Developer' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Thearak</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'm a passionate software developer specializing in building web
              and mobile applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {roles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <role.icon size={18} className="text-primary" />
                  <span className="text-sm">{role.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="#contact"
                className="gradient-bg px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Get In Touch <ArrowRight size={18} />
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile with online image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="absolute inset-0 gradient-bg rounded-full opacity-20 blur-3xl animate-pulse"></div>

              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-2 backdrop-blur-sm">
                <div className="absolute -inset-4 gradient-bg rounded-full opacity-30 blur-xl"></div>

                <div className="relative rounded-xl overflow-hidden aspect-square">
                  <img
                    // src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/627465091_2099235664184643_948556413980685940_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iZjemU1ydD0Q7kNvwHSHEug&_nc_oc=Adq4P45bSlhSn9fkUZlKHyC9qD3OBFP3laLXPqPr5lbEGGDYj0_QcHdp1H40X_bB7QE&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=TNOehw3-BFGo5B06l6Qs9w&_nc_ss=7b2a8&oh=00_Af59YAwkD32t-zqvKXWbNMltDqgTax-rWRXRIB349pqi3w&oe=6A1F75C8"
                    // src="https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/482212570_1830906911017521_5271318882203611787_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=FXTA9tnJe6QQ7kNvwFbJL_l&_nc_oc=AdqY9oidQWL0sOc1wVFF_K5__n-7sNDqV6yHNZtTIflzpfpOo348iEcEdrx1rSjOVLs&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=yQw-iudYoHEN0XIBrLo6zg&_nc_ss=7b2a8&oh=00_Af-SnL3TvM_VpnWDhNp_OERxGvObCngo2tvsttlDCGRoZQ&oe=6A271A9C"
                    // src={myImage}
                    src='https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/776747179_2260461498062058_4325057480577346673_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x2048&ctp=s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DiDP-OIAqz8Q7kNvwEl8hw-&_nc_oc=Adri4WjzctBiw2qoLJ3mDgadgDlrezh7qbxKzz87P6IHyZFxRu-e1Hk003E8ax71ziM&_nc_zt=23&_nc_ht=scontent.fpnh10-1.fna&_nc_gid=oeD-AcuHuwKKsshQiTKlvg&_nc_ss=7b2a8&oh=00_AQIXJbxGyYq_0GGuTQonb6qNjQLpeOUpN7GFJEDIQQboFQ&oe=6A9A2B8F'
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
                  <span className="text-xs text-primary">Not</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-primary">Thearak</span>
                </div>
              </div>
              {/* Add this after the existing content in Hero.jsx, before the closing div */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://t.me/yourusername"
                  target="_blank"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  className="bg-gray-800/50 p-2 rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

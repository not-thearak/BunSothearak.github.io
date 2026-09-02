import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Code2,
  Briefcase
} from "lucide-react";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace with your actual Telegram bot token and chat ID
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const sendToTelegram = async (data) => {
    const message = `📬 *New Portfolio Message!*
    
👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
💬 *Message:* 
${data.message}

📅 *Time:* ${new Date().toLocaleString()}
🌐 *From:* Portfolio Website`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
    
    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const result = await sendToTelegram(formData);
      
      if (result.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact Information
  const contactInfo = [
    { icon: Mail, text: 'bunthearak05@gmail.com', link: 'mailto:thearak@example.com' },
    { icon: Phone, text: '+855 66 937 889', link: 'tel:+85512345678' },
    { icon: MapPin, text: 'Phnom Penh, Cambodia', link: 'https://maps.google.com/?q=Phnom+Penh+Cambodia' },
  ];

  // Social Media Links
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FaFacebook, 
      href: 'https://www.facebook.com/bun.sotheareak.3',
      color: 'hover:bg-[#1877f2]',
      username: '@bun.sotheareak.3'
    },
    { 
      name: 'Telegram', 
      icon: MessageCircle, 
      href: 'https://t.me/SothearakBun',
      color: 'hover:bg-[#26A5E4]',
      username: '@SothearakBun'
    },
    // { 
    //   name: 'LinkedIn', 
    //   icon: FaLinkedin, 
    //   href: 'https://linkedin.com/in/yourusername',
    //   color: 'hover:bg-[#0A66C2]',
    //   username: 'yourusername'
    // },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      href: 'https://github.com/not-thearak',
      color: 'hover:bg-[#333]',
      username: '@not-thearak'
    },
    // { 
    //   name: 'Twitter/X', 
    //   icon: FaTwitter, 
    //   href: 'https://twitter.com/yourusername',
    //   color: 'hover:bg-[#1DA1F2]',
    //   username: '@yourusername'
    // },
    // { 
    //   name: 'Instagram', 
    //   icon: FaInstagram, 
    //   href: 'https://instagram.com/yourusername',
    //   color: 'hover:bg-gradient-to-r from-[#833AB4] to-[#E4405F]',
    //   username: '@yourusername'
    // },
    // { 
    //   name: 'YouTube', 
    //   icon: FaYoutube, 
    //   href: 'https://youtube.com/@yourusername',
    //   color: 'hover:bg-[#FF0000]',
    //   username: 'yourusername'
    // },
    //  { 
    //   name: 'YouTube', 
    //   icon: FaTiktok, 
    //   href: 'https://youtube.com/@yourusername',
    //   color: 'hover:bg-[#000000]',
    //   username: 'yourusername'
    // },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect on social media or send me a message directly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  // href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <span>{info.text}</span>
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl text-center border border-gray-700 hover:border-transparent transition-all duration-300 ${social.color} group`}
                >
                  <social.icon size={24} className="mx-auto mb-2 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white">
                    {social.name}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{social.username}</p>
                </motion.a>
              ))}
            </div>

            {/* Telegram Direct Contact Card */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="text-primary" size={28} />
                <h4 className="text-lg font-semibold">Connect on Telegram</h4>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Fastest way to reach me! Click the button below to start a conversation.
              </p>
              <a
                href="https://t.me/SothearakBun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#26A5E4] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <MessageCircle size={18} />
                Message me on Telegram
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-500">Message sent successfully! I'll reply soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-500">Failed to send message. Please try again or contact me on Telegram.</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-100"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-100"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-100"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-bg px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
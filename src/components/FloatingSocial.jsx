import React from 'react';
import { MessageCircle } from "lucide-react";

import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

const FloatingSocial = () => {
  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/bun.sotheareak.3', color: '#1877f2', label: 'Facebook' },
    { icon: MessageCircle, href: 'https://t.me/SothearakBun', color: '#26A5E4', label: 'Telegram' },
    // { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', color: '#0A66C2', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/not-thearak', color: '#333', label: 'GitHub' },
    // { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: '#1DA1F2', label: 'Twitter' },
  ];

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-3">
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/80 backdrop-blur-sm p-3 rounded-full hover:scale-110 transition-all duration-300 group relative"
            style={{ '--hover-color': social.color }}
          >
            <social.icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingSocial;
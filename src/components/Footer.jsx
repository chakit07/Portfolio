import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const profiles = [
    {
      name: "HackerRank",
      icon: <FaHackerrank />,
      link: "https://www.hackerrank.com/profile/chakitsharma7",
      color: "text-green-400",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode />,
      link: "https://leetcode.com/u/chakitsharma7/",
      color: "text-yellow-400",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/chakitsharma7",
      color: "text-gray-800 dark:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/chakitsharma7",
      color: "text-blue-500",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:chakitsharma7@gmail.com",
      color: "text-red-500",
    },
  ];

  return (
    <footer className="bg-white/40 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-300 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* CopyRight */}
        <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} Chakit Sharma. All rights reserved.
        </p>

        {/* Social / Profile Links */}
        <div className="flex gap-6 text-2xl">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:scale-110 transition-transform ${profile.color}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              title={profile.name}
            >
              {profile.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/MyImage.jpeg";
import SectionWrapper from "./Wrapper/SectionWrapper";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  // ✅ Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit + trigger resume download
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/mwpnerkk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      // Trigger resume download
      const link = document.createElement("a");
      link.href = "/Chakit_Resume.pdf";
      link.download = "Chakit_Resume.pdf";
      link.click();

      setIsOpen(false);
      setFormData({ name: "", email: "", reason: "" });
      alert("✅ Thanks for reaching out!");
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper id="hero">
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full 
        bg-gradient-to-br from-blue-100 via-white to-purple-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg 
        backdrop-blur-xl border border-white/30 dark:border-gray-700/30"
      >
        {/* Left - Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chakit Sharma
            </span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                "Software Developer 💻",
                5000,
                "Web Enthusiast 🌍",
                5000,
                "Tech Explorer 🚀",
                5000,
                "Always Learning 📚",
                5000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            I build{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              modern
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              scalable
            </span>
            , and{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              user-friendly
            </span>{" "}
            applications. Always improving. Always creating.
          </p>

          {/* 🔗 Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
            {[
              {
                icon: <FaEnvelope className="w-7 h-7" />,
                href: "mailto:chakitsharma7@gmail.com",
              },
              {
                icon: <FaGithub className="w-7 h-7" />,
                href: "https://github.com/chakit07",
              },
              {
                icon: <FaLinkedin className="w-7 h-7" />,
                href: "https://www.linkedin.com/in/chakitsharma/",
              },
              {
                icon: <SiLeetcode className="w-7 h-7" />,
                href: "https://leetcode.com/u/chakit07/",
              },
              {
                icon: <SiHackerrank className="w-7 h-7" />,
                href: "https://www.hackerrank.com/profile/chakitsharma7",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* 📄 Resume Button (Opens Form) */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-6 py-3 mt-6 rounded-xl 
            bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg
            hover:opacity-90 transition text-lg justify-center md:justify-start w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileDownload className="w-6 h-6" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={heroImg}
            alt="Profile"
            className="w-64 md:w-80 lg:w-96 rounded-full shadow-2xl border-4 
            border-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          />

          {/* Glow Effect */}
          <div
            className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r 
            from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"
          ></div>
        </motion.div>
      </div>

      {/* 📌 Modal for Resume Form */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Fill details to download resume
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <textarea
                name="reason"
                placeholder="Reason for downloading"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
                >
                  Submit & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Hero;

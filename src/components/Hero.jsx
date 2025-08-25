import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/MyImage.jpeg"; // replace with your image
import SectionWrapper from "./Wrapper/SectionWrapper";

const Hero = () => {
  return (
    <SectionWrapper id="hero">
      <div
        className="flex flex-col md:flex-row items-center justify-between w-full 
      bg-gradient-to-br from-blue-100 via-white to-purple-100 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg backdrop-blur-xl border border-white/30 dark:border-gray-700/30"
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
            className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
          rounded-full blur-3xl opacity-40 animate-pulse"
          ></div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;

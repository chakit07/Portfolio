import { motion } from "framer-motion";
import Education from "./About Section/Education";
import Experience from "./About Section/Experience";
import SectionWrapper from "./Wrapper/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about">
      <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-20 relative">
        <motion.div
          className="max-w-4xl w-full backdrop-blur-xl 
          bg-white/40 dark:bg-gray-800/30 
          rounded-3xl p-8 md:p-12 
          shadow-2xl border border-white/30 dark:border-gray-700/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-extrabold 
            text-gray-900 dark:text-white mb-6 text-center md:text-left 
            bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </h2>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
            I’m a passionate{" "}
            <span className="font-semibold text-blue-600">
              Software Developer
            </span>{" "}
            who enjoys creating{" "}
            <span className="font-semibold text-purple-600">
              modern, scalable, and user-friendly applications
            </span>
            . With a strong foundation in{" "}
            <span className="font-semibold">React, Node.js, and Python</span>, I
            thrive on solving problems and continuously improving my skills.
          </p>

          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
            I have worked on multiple projects ranging from web applications to
            AI-integrated tools. My focus is on{" "}
            <span className="font-semibold text-pink-600">
              building seamless user experiences
            </span>{" "}
            and{" "}
            <span className="font-semibold text-indigo-600">
              efficient backend systems
            </span>
            .
          </p>

          {/* Info Cards */}
          <div className="mt-6 grid gap-6 sm:grid-cols-1">
            <Education />
            <Experience />
          </div>
        </motion.div>
      </section>
    </SectionWrapper>
  );
};

export default About;

import { motion } from "framer-motion";
import Education from "./About Section/Education";
import Experience from "./About Section/Experience";
import SectionWrapper from "./Wrapper/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper id="about">
      <section className="w-full min-h-screen flex items-center justify-center px-3 md:px-20 relative">
        <motion.div
          className="max-w-6xl w-full backdrop-blur-xl 
          bg-white/40 dark:bg-gray-800/30 
          rounded-3xl p-8 md:p-12 
          shadow-2xl border border-white/30 dark:border-gray-700/30
          flex flex-col md:flex-row gap-10 items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* 👤 Left Side - Profile Image */}
          <div className="relative flex-shrink-0 max-w-sm">
            {/* Gradient Glow Behind Image */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 
                  rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl opacity-70"
            ></div>

            {/* Profile Image with Soft Pebble Corners */}
            <motion.img
              src="/MyImage.jpeg" // ✅ Replace with your actual image path
              alt="Profile"
              className="relative w-full h-auto object-cover 
               shadow-2xl border-4 border-white/70 dark:border-gray-700 
               rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>

          {/* 📝 Right Side - About Content */}
          <div className="flex-1">
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
              <span className="font-semibold">
                Java, React, Node.js, MongoDB, MySQL, and basic Python.
              </span>
              I thrive on solving problems and continuously improving my skills.
            </p>

            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-4">
              I have worked on multiple projects ranging from web applications
              to AI-integrated tools. My focus is on{" "}
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
          </div>
        </motion.div>
      </section>
    </SectionWrapper>
  );
};

export default About;

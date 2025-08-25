import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer (Internship)",
    details:
      "Worked on React.js, Node.js, and MongoDB for building scalable web apps.",
  },
  {
    year: "2023",
    role: "Frontend Developer (Freelance)",
    details:
      "Designed responsive UI with React + Tailwind CSS for client projects.",
  },
  {
    year: "2022",
    role: "AI Project Contributor",
    details:
      "Integrated AI APIs (OpenAI, TensorFlow) into personal and academic projects.",
  },
];

const Experience = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="p-6 rounded-2xl 
                 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                 border border-gray-700/50 shadow-xl cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => setOpen(!open)}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
          💼 Experience
        </h3>
        {open ? (
          <FaChevronUp className="text-pink-400" />
        ) : (
          <FaChevronDown className="text-pink-400" />
        )}
      </div>

      {/* Expandable Timeline */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mt-6 relative border-l-4 border-pink-500/60 pl-6 space-y-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Dot */}
                <span
                  className="absolute -left-8 top-2 w-5 h-5 
                                bg-gradient-to-r from-pink-500 to-orange-400 
                                rounded-full border-4 border-gray-900 shadow-lg"
                ></span>

                <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                <p className="text-gray-300">{exp.details}</p>
                <span className="text-sm text-gray-500">{exp.year}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;

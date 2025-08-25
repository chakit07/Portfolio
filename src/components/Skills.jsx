import { motion } from "framer-motion";
import {
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiTensorflow } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React.js",
        level: 90,
        icon: <FaReact className="text-cyan-500" />,
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: <SiTailwindcss className="text-blue-400" />,
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        level: 80,
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "MongoDB",
        level: 75,
        icon: <SiMongodb className="text-green-400" />,
      },
      {
        name: "SQL",
        level: 70,
        icon: <FaDatabase className="text-purple-400" />,
      },
    ],
  },
  {
    category: "AI / ML",
    items: [
      {
        name: "Python",
        level: 85,
        icon: <FaPython className="text-yellow-400" />,
      },
      {
        name: "TensorFlow",
        level: 65,
        icon: <SiTensorflow className="text-orange-400" />,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80, icon: <FaGitAlt className="text-red-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16"
    >
      <motion.div
        className="max-w-5xl w-full backdrop-blur-xl
                   bg-white/40 dark:bg-gray-800/40
                   rounded-2xl p-10 md:p-14
                   shadow-2xl border border-white/30"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-4xl font-extrabold text-center mb-10
                     bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
                     bg-clip-text text-transparent"
        >
          ⚡ Skills
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              className={`p-6 rounded-xl shadow-lg border border-white/20
                          hover:scale-105 transition-transform duration-300
                          ${
                            // Light mode gradient
                            "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 " +
                            // Dark mode gradient
                            "dark:from-gray-800/70 dark:via-gray-700/60 dark:to-gray-900/80"
                          }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3
                className="text-xl font-bold mb-4
                           bg-gradient-to-r from-blue-600 to-purple-600
                           bg-clip-text text-transparent"
              >
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1 text-gray-700 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        {skill.icon} <span>{skill.name}</span>
                      </div>
                      <span className="text-sm">{skill.level}%</span>
                    </div>
                    {/* Progress Bar */}
                    <motion.div
                      className="h-2 rounded-lg overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      style={{
                        background: `linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiRender,
  SiTableau,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        level: 95,
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS",
        level: 80,
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        level: 75,
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        name: "React.js",
        level: 85,
        icon: <FaReact className="text-cyan-500" />,
      },
      {
        name: "Redux.js",
        level: 65,
        icon: <SiRedux className="text-purple-600" />,
      },
      {
        name: "Tailwind CSS",
        level: 80,
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
        name: "Express.js",
        level: 70,
        icon: <FaServer className="text-purple-400" />,
      },
      {
        name: "MongoDB",
        level: 75,
        icon: <SiMongodb className="text-green-400" />,
      },
      {
        name: "SQL",
        level: 50,
        icon: <FaDatabase className="text-purple-400" />,
      },
    ],
  },
  {
    category: "Programming",
    items: [
      {
        name: "Java",
        level: 85,
        icon: <FaJava className="text-red-500" />,
      },
      {
        name: "Python",
        level: 45,
        icon: <FaPython className="text-yellow-400" />,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 80, icon: <FaGitAlt className="text-red-400" /> },
      {
        name: "GitHub",
        level: 80,
        icon: <FaGithub className="text-gray-400" />,
      },
      {
        name: "Vercel",
        level: 75,
        icon: <SiVercel className="text-black" />,
      },
      {
        name: "Render",
        level: 70,
        icon: <SiRender className="text-indigo-400" />,
      },
      {
        name: "Tableau",
        level: 50,
        icon: <SiTableau className="text-orange-500" />,
      },
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
                            "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 " +
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

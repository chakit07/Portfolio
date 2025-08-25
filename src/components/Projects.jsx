import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Dummy projects
const projectsData = [
  {
    title: "Myntra Clone",
    category: "Web",
    description:
      "A full-stack e-commerce clone of Myntra with modern UI, authentication, and payment integration.",
    details:
      "A Myntra-inspired e-commerce platform replicating the shopping experience with product filters, cart, and secure checkout. Built using React, Node.js, Express, and Stripe with a fully responsive design.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/chakit07/Myntra-Clone-Frontend.git",
    live: "https://myntra-clone-frontend-teal.vercel.app/",
    image:
      "https://camo.githubusercontent.com/48c8050fc401c81534866c5efbc8fd5d10791cec309085df791c718da0ad4f61/68747470733a2f2f313030306c6f676f732e6e65742f77702d636f6e74656e742f75706c6f6164732f323032322f30382f4d796e7472612d4c6f676f2d373638783433322e706e67",
  },
  {
    title: "AI Expense Tracker",
    category: "AI/ML",
    description:
      "Expense tracker with AI-powered insights and prediction features.",
    details:
      "Tracks user expenses and provides AI-driven predictions of future spending patterns. Built using Python, TensorFlow, React, and Node.js. Features authentication and data visualization.",
    techStack: ["React", "Node.js", "MongoDB", "Python", "TensorFlow"],
    github: "https://github.com/yourusername/expense-tracker",
    live: "https://expense-ai-demo.com",
    image:
      "https://i0.wp.com/www.planetcrust.com/wp-content/uploads/2023/11/228.-Mastering-Your-Finances-Building-an-AI-Powered-Expense-Tracking-App-01.png?fit=1030%2C580&ssl=1",
  },
  {
    title: "Portfolio Website",
    category: "Web",
    description:
      "Personal portfolio showcasing skills, projects, and experience.",
    details:
      "Responsive portfolio with dark mode, animations, and sections for skills, projects, and contact. Built with React, TailwindCSS, and Framer Motion.",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com",
    image:
      "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
  },
  {
    title: "React Calculator",
    category: "Web",
    description:
      "A simple yet functional calculator built with React for performing basic arithmetic operations.",
    details:
      "Interactive calculator with a clean UI, responsive design, and support for basic operations like addition, subtraction, multiplication, and division. Built with React and styled using plain CSS for custom design.",
    techStack: ["React", "CSS"],
    github: "https://github.com/chakit07/React-Calculator.git",
    live: "https://react-calculator-three-wheat-83.vercel.app/",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEP6bqwXqhdtQ/feedshare-shrink_1280/B56ZhpZ9iSG0Ak-/0/1754115070889?e=1758758400&v=beta&t=MZC80lIrHgZVeOdj7DCy9kchJ33P7o8huON1reVwpHc",
  },
];

const categories = ["All", "Web", "AI/ML", "Tools"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);
  const [typedText, setTypedText] = useState("");

  // Filter projects with smooth fade
  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === activeCategory);

    setFilteredProjects([]);
    const timer = setTimeout(() => setFilteredProjects(filtered), 200);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Typing animation in modal
  // Typing animation in modal
  useEffect(() => {
    if (!selectedProject) {
      setTypedText("");
      return;
    }

    // Make sure details is always a string
    const text = String(selectedProject.details || "");
    setTypedText(""); // reset before typing starts

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-10
                   bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500
                   bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        🚀 Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-12 flex-wrap justify-center">
        {categories.map((cat, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                        ${
                          activeCategory === cat
                            ? "bg-pink-500 text-white shadow-lg"
                            : "bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        }`}
            whileTap={{ scale: 0.9 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              className="rounded-2xl shadow-lg border border-white/20
                         overflow-hidden flex flex-col cursor-pointer
                         bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50
                         dark:from-gray-800/70 dark:via-gray-700/50 dark:to-gray-900/80
                         transition-all duration-500
                         hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4"
              />

              <p className="text-gray-300 mb-4">{typedText}</p>

              <h4 className="text-lg font-semibold text-pink-400 mb-2">
                🛠 Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="bg-gray-700/60 text-gray-200 px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-6 mt-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

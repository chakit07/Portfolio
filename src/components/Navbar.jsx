import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const links = [
    { id: "home", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  // Scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // adjust for navbar height
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 w-full backdrop-blur-lg bg-white/60 dark:bg-gray-900/60
                 shadow-md z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-extrabold cursor-pointer 
                     bg-gradient-to-r from-blue-500 to-purple-600 
                     bg-clip-text text-transparent tracking-wide"
        >
          Chakit's Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={700}
                offset={-80}
                className={`relative cursor-pointer text-lg font-medium transition-all duration-300 
                  ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  }`}
              >
                {text}
                {activeSection === id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700
                       hover:scale-110 transition-transform"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md 
                       shadow-xl px-6 py-6 space-y-4 text-center"
          >
            {links.map(({ id, text }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`block cursor-pointer text-lg font-medium transition-colors duration-300 
                    ${
                      activeSection === id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    }`}
                >
                  {text}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

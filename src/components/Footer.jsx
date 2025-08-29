import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white/40 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-300 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-3 text-center">
        {/* CopyRight */}
        <p className="text-gray-800 dark:text-gray-400 text-sm md:text-base">
          © {new Date().getFullYear()} Chakit Sharma. All rights reserved.
        </p>

        {/* Attract Tagline */}
        <motion.p
          className="text-lg font-semibold text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          🚀 Let’s Build Something Amazing Together
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

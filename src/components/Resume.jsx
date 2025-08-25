import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-16"
    >
      <motion.h2
        className="text-4xl font-extrabold text-center mb-10
                   bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        🔒 Resume
      </motion.h2>

      {/* Blurred Resume Preview */}
      <motion.div
        className="bg-white/30 dark:bg-gray-800/40 rounded-2xl shadow-2xl border border-white/20
                   backdrop-blur-lg overflow-hidden max-w-3xl w-full p-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02, rotate: -0.5 }}
        whileTap={{ scale: 0.98, rotate: 0 }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <img
            src="Preview.png"
            alt="Resume Preview"
            className="w-full h-[500px] object-cover rounded-xl blur-sm opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-700 dark:text-gray-200 font-semibold text-lg drop-shadow-md">
              🔐 Encrypted – Preview Only
            </p>
          </div>
        </motion.div>

        <p className="text-gray-600 dark:text-gray-300 mt-6">
          You can <b>preview</b> my resume here. If you’d like to{" "}
          <b>download</b> it, please request permission below 👇
        </p>

        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="px-6 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600
                       text-white font-semibold shadow-lg transition-colors"
          >
            Preview Resume
          </button>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600
                       text-white font-semibold shadow-lg transition-colors"
          >
            Request Download
          </button>
        </div>
      </motion.div>

      {/* Modal for Download Request */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
                onClick={() => setIsModalOpen(false)}
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Request Resume Access
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Fill in your details and reason. I’ll receive your request at{" "}
                <b>chakitsharma7@gmail.com</b>.
              </p>

              <form
                action="https://formspree.io/f/mwpnerkk"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                             text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                             text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="reason"
                  placeholder="Reason for requesting my resume"
                  rows="4"
                  required
                  className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                             text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600
                             text-white font-semibold shadow-lg mt-4 transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-5xl w-full shadow-2xl relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
                onClick={() => setIsPreviewOpen(false)}
              >
                ✖
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                📄 Full Resume Preview
              </h3>
              <iframe
                src="/Chakit_Resume.pdf"
                className="w-full h-[80vh] rounded-lg border border-gray-300 dark:border-gray-700"
                title="Resume Preview"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;

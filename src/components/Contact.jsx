import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const res = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("✅ Thanks! Your message has been sent.");
      form.reset();
    } else {
      setStatus("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
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
        📬 Contact Me
      </motion.h2>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mwpnerkk"
        method="POST"
        className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-lg 
                   border border-white/20 dark:border-gray-700
                   shadow-2xl rounded-3xl p-8 w-full max-w-lg flex flex-col gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                     border border-gray-300 dark:border-gray-600
                     text-gray-900 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                     border border-gray-300 dark:border-gray-600
                     text-gray-900 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 
                     border border-gray-300 dark:border-gray-600
                     text-gray-900 dark:text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600
                     text-white font-semibold shadow-lg mt-4 transition-colors"
        >
          Send Message
        </button>

        {/* ✅ Show Success / Error Message */}
        {status && (
          <p className="text-center mt-4 text-sm text-green-500 dark:text-green-400">
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;

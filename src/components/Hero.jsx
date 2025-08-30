import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaTimesCircle,
} from "react-icons/fa";
import { SiHackerrank, SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/MyImage.jpeg";
import SectionWrapper from "./Wrapper/SectionWrapper";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [status, setStatus] = useState("none"); // none | pending | approved | error
  const [requestId, setRequestId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg("");
    setSubmitStatus(null);
  };

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const checkRes = await fetch(
        `${API_BASE}/request-status/${formData.email}`
      );
      const checkData = await checkRes.json();

      if (checkData.status === "approved") {
        setStatus("approved");
        setRequestId(checkData.id);
        setSubmitStatus("success");
        setIsOpen(false);
      } else if (checkData.status === "pending") {
        setStatus("pending");
        setRequestId(checkData.id);
        setSubmitStatus("success");
        setIsOpen(false);
      } else if (checkData.status === "none") {
        const res = await fetch(`${API_BASE}/request-resume`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();

        setSubmitStatus("success");
        setStatus("pending");
        setIsOpen(false);
        setFormData({ name: "", email: "", reason: "" });
      } else {
        setErrorMsg("Invalid email or request not found.");
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("❌ Error submitting request");
      setSubmitStatus("error");
    }

    setTimeout(() => setSubmitStatus(null), 3000);
  };
  useEffect(() => {
    const checkStatus = async () => {
      if (!formData.email) return;
      const res = await fetch(`${API_BASE}/request-status/${formData.email}`);
      const data = await res.json();

      if (data.status === "approved") {
        const approvedAt = new Date(data.approved_at);
        if (new Date() - approvedAt > 3 * 60 * 1000) {
          // expired
          setStatus("none");
          setRequestId(null);
        } else {
          setStatus("approved");
          setRequestId(data.id);
        }
      } else {
        setStatus(data.status);
      }
    };

    checkStatus();
  }, [formData.email]);

  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg backdrop-blur-xl border border-white/30 dark:border-gray-700/30">
        {/* Left - Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Chakit Sharma
            </span>
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                "Software Developer 💻",
                5000,
                "Web Enthusiast 🌍",
                5000,
                "Tech Explorer 🚀",
                5000,
                "Always Learning 📚",
                5000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            I build{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              modern
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              scalable
            </span>
            , and{" "}
            <span className="font-semibold text-pink-600 dark:text-pink-400">
              user-friendly
            </span>{" "}
            applications.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8">
            {[
              {
                icon: <FaEnvelope className="w-7 h-7" />,
                href: "mailto:chakitsharma7@gmail.com",
              },
              {
                icon: <FaGithub className="w-7 h-7" />,
                href: "https://github.com/chakit07",
              },
              {
                icon: <FaLinkedin className="w-7 h-7" />,
                href: "https://www.linkedin.com/in/chakitsharma/",
              },
              {
                icon: <SiLeetcode className="w-7 h-7" />,
                href: "https://leetcode.com/u/chakit07/",
              },
              {
                icon: <SiHackerrank className="w-7 h-7" />,
                href: "https://www.hackerrank.com/profile/chakitsharma7",
              },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Resume Button with Status */}
          <div className="flex items-center gap-4 mt-6 relative">
            {status === "approved" && requestId ? (
              <motion.a
                href={`${API_BASE}/download-resume/${requestId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <motion.button
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileDownload className="w-6 h-6" /> Download Resume
                </motion.button>

                {/* Hover-only tooltip */}
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg pointer-events-none"
                >
                  Already Approved
                </motion.span>
              </motion.a>
            ) : (
              <motion.button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload className="w-6 h-6" /> Request Resume
              </motion.button>
            )}

            {/* Status Indicators */}
            {submitStatus === "success" && (
              <FaCheckCircle
                className="w-6 h-6 text-green-500"
                title="Request submitted successfully!"
              />
            )}
            {submitStatus === "error" && (
              <FaTimesCircle
                className="w-6 h-6 text-red-500"
                title="Submission failed. Try again."
              />
            )}
            {status === "pending" && !requestId && (
              <FaClock
                className="w-6 h-6 text-yellow-500 animate-pulse"
                title="Pending Approval"
              />
            )}
          </div>
        </motion.div>

        {/* Right - Profile Image */}
        <motion.div
          className="flex-1 flex justify-center mt-10 md:mt-0 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={heroImg}
            alt="Profile"
            className="w-64 md:w-80 lg:w-96 rounded-full shadow-2xl border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
          <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Fill details to request resume
            </h2>
            {errorMsg && (
              <p className="text-red-500 mb-2 font-semibold">{errorMsg}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <textarea
                name="reason"
                placeholder="Reason for requesting"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Hero;

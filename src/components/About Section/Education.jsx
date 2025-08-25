import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const timeline = [
  {
    year: "2022 - Present",
    title: "B.Tech in Computer Science",
    details: "Currently Pursuing - IMS Engineering College",
  },
  {
    year: "2021",
    title: "12th Class",
    details: "Passed with 87.3% - Carmel Public School",
  },
  {
    year: "2019",
    title: "10th Class",
    details: "Passed with 83.5% - Carmel Public School",
  },
];

const Education = () => {
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
        <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          🎓 Education
        </h3>
        {open ? (
          <FaChevronUp className="text-blue-400" />
        ) : (
          <FaChevronDown className="text-blue-400" />
        )}
      </div>

      {/* Expandable Timeline */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mt-6 relative border-l-4 border-blue-500/60 pl-6 space-y-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
          >
            {timeline.map((item, index) => (
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
                                bg-gradient-to-r from-blue-500 to-cyan-400 
                                rounded-full border-4 border-gray-900 shadow-lg"
                ></span>

                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.details}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Education;

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    year: "August 2025 - Present",
    role: "Project Leader - AI Powered Carbon Emission Tracker",
    details:
      "Leading the development of a major college project focused on tracking and reducing carbon footprints using AI-powered insights.",
    address: "College Major Project",
    status: "Under Development",
  },

  {
    year: "June 2025 - Aug 2025 (3 months)",
    role: "Full Stack Developer Intern - iCtrlBiz Consulting Pvt Ltd",
    details:
      "Built an AI-powered Expense Tracker that automatically categorizes expenses, provides spending insights, and helps users manage budgets efficiently.",
    address: "Noida, Uttar Pradesh, India",
    certificate:
      "https://media.licdn.com/dms/image/v2/D5622AQHzSDkteObQMQ/feedshare-shrink_2048_1536/B56Zjp5M.EIAA8-/0/1756270745153?e=1761177600&v=beta&t=kVXbhoTZVXBIp2YH34mn9hVaoFjD2tiaCvCpJjnDxcw",
  },
  {
    year: "Sept 2024 - Oct 2024 (2 months)",
    role: "Intern - Future Intern",
    details: "Contributed to Java development tasks as part of a small ",
    address: "Ghaziabad, Uttar Pradesh, India",
    certificate:
      "https://media.licdn.com/dms/image/v2/D562DAQHOiMF62Iy9ow/profile-treasury-image-shrink_800_800/B56Zjp5_ZpG0AY-/0/1756270951265?e=1758913200&v=beta&t=zeyvRv7naQch8M7yUTQJGyHLK_6njOEjo-vsD1EwQeE",
  },
  {
    year: "Jan 2024 - Mar 2024 (3 months)",
    role: "Technical Trainee - ShapeMySkills Pvt. Ltd.",
    details:
      "Successfully completed technical training in Data Science with Python, mastering data manipulation, analysis and visualization techniques to drive informed decision-making.",
    address: "Ghaziabad, Uttar Pradesh, India",
    certificate: "Available Soon",
  },
  {
    year: "2023",
    role: "Research Collaborator",
    details:
      "Worked in a team to publish a research paper, contributing to literature review, methodology design, and data analysis.",
    address: "College Research Project",
    certificate:
      "https://media.licdn.com/dms/image/v2/D4D22AQEfTpQcqUhXIw/feedshare-shrink_800/feedshare-shrink_800/0/1695233226359?e=1761177600&v=beta&t=5Z3-l5U87_oNvi7U9Y1JUR635NEk_jzD07E27EHGudI",
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
                <p className="text-gray-400 text-sm italic">{exp.address}</p>
                <span className="text-sm text-gray-500">{exp.year}</span>

                {/* Certificate space */}
                {exp.certificate ? (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-2 text-sm text-pink-400 hover:underline"
                  >
                    📄 View Certificate
                  </a>
                ) : (
                  <div className="mt-2 w-40 h-8 bg-gray-800/60 border border-gray-700 rounded-md flex items-center justify-center text-gray-500 text-xs italic">
                    Certificate Not Added
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;

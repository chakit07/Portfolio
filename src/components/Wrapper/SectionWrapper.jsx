import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, bgClass = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-[100vh] 
                  flex flex-col justify-center px-6 md:px-20 py-16 md:py-24 
                  ${bgClass}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;

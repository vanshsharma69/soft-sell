import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="text-center py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        whileHover={{ scale: 1.02 }}
      >
        Sell Your Unused Software Licenses
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        whileHover={{ scale: 1.01 }}
      >
        Turn your unused licenses into cash quickly and securely.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Sell My Licenses
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;

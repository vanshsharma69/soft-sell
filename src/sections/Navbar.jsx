import { motion } from 'framer-motion';

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav
      className="p-4 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Soft-Sell</h1>
      <motion.button
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Toggle Dark Mode
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      className="p-5 flex justify-between items-center bg-white/70 dark:bg-black/60 shadow-lg backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-cyan-400 uppercase tracking-wide">
        Soft-Sell
      </h1>

      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-red-500 hover:to-pink-500 transition-all duration-300 text-white px-5 py-2 rounded-full text-sm shadow-md"
        >
          Chat with AI
        </motion.button>

        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ rotate: 20 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 shadow-inner"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

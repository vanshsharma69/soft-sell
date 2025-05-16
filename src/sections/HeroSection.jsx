import { motion } from 'framer-motion';
import image from '../assets/image.png';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <motion.section
      className="w-full px-4 sm:px-8 lg:px-16 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6 flex flex-col items-center lg:items-start">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-500 dark:to-cyan-400"
            whileHover={{ scale: 1.02 }}
          >
            Sell Your Unused Software Licenses
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-800 dark:text-gray-300 font-medium min-h-[2.5rem] leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Turn your unused licenses into{' '}
            <span className="text-pink-600 dark:text-pink-400 font-semibold text-xl inline-block min-w-[200px]">
              <Typewriter
                words={[
                  'cash fast 💰',
                  'secure value 🔐',
                  'real money 🪙',
                  'digital assets ♻️',
                  'profits instantly 🚀'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300"
          >
            Sell My Licenses
          </motion.button>
        </div>

        {/* Image */}
        <motion.img
          src={image}
          alt="Hero Illustration"
          className="w-[260px] sm:w-[320px] lg:w-[420px] h-auto drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.section>
  );
};

export default HeroSection;

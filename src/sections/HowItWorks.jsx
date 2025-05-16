import { motion } from 'framer-motion';
import { UploadIcon, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <UploadIcon size={32} />,
    title: 'Upload License',
    description: 'Easily upload your unused software license to get started.'
  },
  {
    icon: <DollarSign size={32} />,
    title: 'Get Valuation',
    description: 'Our experts will evaluate the worth of your license quickly.'
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Get Paid',
    description: 'Receive payment securely and instantly after approval.'
  },
];

const HowItWorks = () => {
  return (
    <motion.section
      className="py-24 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-all duration-500 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-500 dark:to-cyan-400 mb-14"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        How It Works
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform transition duration-500 text-left flex flex-col items-center"
            whileHover={{ scale: 1.06, rotate: 0.5 }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-purple-500 dark:to-blue-400 p-4 rounded-full shadow-lg hover:shadow-pink-400/40 transition-all duration-300">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;
  
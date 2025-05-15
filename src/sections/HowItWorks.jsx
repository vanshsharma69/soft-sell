import { motion } from 'framer-motion';
import { UploadIcon, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  { icon: <UploadIcon />, title: 'Upload License' },
  { icon: <DollarSign />, title: 'Get Valuation' },
  { icon: <CheckCircle />, title: 'Get Paid' },
];

const HowItWorks = () => {
  return (
    <motion.section
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4">
              {step.icon}
            </div>
            <h3 className="font-medium">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorks;

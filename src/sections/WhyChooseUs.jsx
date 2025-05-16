import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ThumbsUp, TrendingUp } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, text: '100% Secure Transactions' },
  { icon: Clock, text: 'Fast Payments' },
  { icon: ThumbsUp, text: 'Trusted by Thousands' },
  { icon: TrendingUp, text: 'Highest Payout Rates' },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-24 bg-gray-50 dark:bg-gray-900 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
        Why Choose Us
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16 text-base sm:text-lg">
        Discover why thousands of users trust our platform to handle their transactions with speed, security, and satisfaction.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div
              className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            >
              <reason.icon size={32} />
            </div>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">
              {reason.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;

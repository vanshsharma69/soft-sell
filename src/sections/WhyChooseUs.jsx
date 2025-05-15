import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ThumbsUp, TrendingUp } from 'lucide-react';

const reasons = [
  { icon: <ShieldCheck />, text: '100% Secure Transactions' },
  { icon: <Clock />, text: 'Fast Payments' },
  { icon: <ThumbsUp />, text: 'Trusted by Thousands' },
  { icon: <TrendingUp />, text: 'Highest Payout Rates' },
];

const WhyChooseUs = () => {
  return (
    <motion.section
      className="py-20 bg-gray-50 dark:bg-gray-900 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <div className="text-blue-600 dark:text-blue-400 mb-2">
              {reason.icon}
            </div>
            <p>{reason.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;

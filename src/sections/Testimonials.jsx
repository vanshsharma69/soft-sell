import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    message:
      'Switching to this SOFT-SEll license has transformed our workflow. It’s not just software, it’s a competitive advantage.',
    name: 'Mr. Kinshuk Goel',
    company: 'Goel Exports (New Delhi)',
  },
  {
    message:
      'Simple to get started, powerful as we scale. This licensed solution is a no-brainer for any growing business.',
    name: 'Mr. Ravi Utmani',
    company: 'Laxmi Ideal (Jaipur)',
  },
  {
    message:
      'Reliable, fast, and backed by great support. Licensing this SOFT-SEll platform was one of our smartest decisions.',
    name: 'Mr. Danish Ali',
    company: 'Vision Exports (Moradabad)',
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16">
        Loved by Businesses & Individuals
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-left flex flex-col justify-between max-w-sm w-full hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.04 }}
          >
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
              “{t.message}”
            </p>
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" strokeWidth={0} />
                ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    role: 'IT Manager',
    company: 'TechCorp',
    message: 'Selling our old licenses was easier than ever. Fast payment and great service!',
  },
  {
    name: 'Jane Smith',
    role: 'Founder',
    company: 'StartupHive',
    message: 'Excellent valuation process. Totally transparent and quick!',
  },
];

const Testimonials = () => {
  return (
    <motion.section
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-10">Customer Testimonials</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto"
            whileHover={{ scale: 1.03 }}
          >
            <p className="mb-4 italic">"{t.message}"</p>
            <h4 className="font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.role} at {t.company}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;

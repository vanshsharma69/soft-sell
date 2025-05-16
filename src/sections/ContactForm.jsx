import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      className="py-24 px-6 md:px-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Contact Us
      </h2>

      <form className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg space-y-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Adobe">Adobe</option>
          <option value="Others">Others</option>
        </select>
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 px-8 rounded-xl shadow-md"
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default ContactForm;

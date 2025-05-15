import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.section
      className="py-20 px-4 md:px-40"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold text-center mb-10">Contact Us</h2>
      <form className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded bg-white dark:bg-gray-900" required />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white dark:bg-gray-900" required />
        <input type="text" placeholder="Company" className="w-full p-3 rounded bg-white dark:bg-gray-900" required />
        <select className="w-full p-3 rounded bg-white dark:bg-gray-900" required>
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Adobe">Adobe</option>
          <option value="Others">Others</option>
        </select>
        <textarea rows="4" placeholder="Message" className="w-full p-3 rounded bg-white dark:bg-gray-900" required />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default ContactForm;

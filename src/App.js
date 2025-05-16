import HeroSection from './sections/HeroSection';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

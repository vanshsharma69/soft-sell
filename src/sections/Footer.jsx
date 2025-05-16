import {
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2e3545] text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* SOLUTIONS */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Soft-Sell</li>
            <li className="flex items-center gap-2">
              <ExternalLink size={14} /> Soft-Rent
            </li>
            <li>Sell License</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <ExternalLink size={14} /> Consulting Services
            </li>
          </ul>
        </div>

        {/* INDUSTRIES */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Industries</h4>
          <ul className="space-y-2 text-sm">
            <li>Furniture</li>
            <li>Handicrafts</li>
            <li>Glass</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li className="flex items-center gap-2">
              <ExternalLink size={14} /> Careers
            </li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-lg">Follow Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> Email
            </li>
            <li className="flex items-center gap-2">
              <Facebook size={16} /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={16} /> LinkedIn
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <Twitter size={16} /> Twitter
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms</span>
          <span className="hover:underline cursor-pointer">Status</span>
          <span className="hover:underline cursor-pointer">English</span>
        </div>
        <div>© Vansh Sharma 2025</div>
      </div>
    </footer>
  );
};

export default Footer;

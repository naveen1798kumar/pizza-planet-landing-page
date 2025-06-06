import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-yellow-100 py-6 px-6 sm:px-12 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Pizza Planet Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-yellow-700 font-heading">Pizza Planet</span>
        </div>

        {/* Title (animated) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-yellow-700 underline decoration-yellow-500 text-center flex-1"
        >
          Pizza Planet
        </motion.h1>

        {/* Social Icons */}
        <div className="flex gap-4 text-yellow-700 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-yellow-900 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-yellow-900 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-yellow-900 transition" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

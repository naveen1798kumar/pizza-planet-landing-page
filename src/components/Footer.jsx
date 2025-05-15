import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/pizzas_planet-logo.png";

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-900 py-10 px-6 sm:px-12 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={Logo} alt="Pizza Planet Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-yellow-800 font-heading">Pizza Planet</span>
          </div>
          <p className="relative text-4xl text-red-700 my-8 themeFont inline-block">
            Crafting Pizza with <br /> Passion and Love !
            <span className="absolute bg-amber-500 -bottom-2 left-0 h-1 w-1/2"></span>
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-yellow-800"
          >
            Contact Us
          </motion.h3>
          <p className="flex items-start gap-2 text-sm">
            <FaMapMarkerAlt className="text-yellow-700 mt-2" />
            KVP Complex, Opp HP Bunk, <br /> Vannan Kovil, PN Palayam, Coimbatore - 641020
          </p>
          <p className="flex items-start gap-2 text-sm">
            <a href="tel:+919159609913" className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-700 " />
            +91 91596 09913</a>
          </p>
          <div className="flex gap-4 text-yellow-700 text-xl my-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-yellow-900 transition" />
            </a>
            <a href="https://www.instagram.com/pizzasplanet25" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-yellow-900 transition" />
            </a>
          </div>
        </div>

        {/* Mini Map */}
        <div className="rounded-xl overflow-hidden shadow-md border border-yellow-300">
          <iframe
            title="Pizza Planet Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.593106728796!2d76.94551636959213!3d11.160036615058566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f1eb554076a1%3A0x47774a828866c1b3!2spizzasplanet!5e0!3m2!1sen!2sus!4v1747300118943!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:scale-105 transition-all duration-300 h-full"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-yellow-800 mt-10 border-t border-yellow-300 pt-4">
        &copy; {new Date().getFullYear()} Pizza Planet. Crafted with 🍕 & ❤️ in India. <br />
        <span className="text-yellow-600">Made by <a href="https://cybersocsolutions.com/" target="_blank" rel="noopener noreferrer"><strong>Cybersoc Solutions Pvt. LTD</strong></a></span>
      </div>
    </footer>
  );
};

export default Footer;

import { pizzaData, menuData, hotItemsData, coldItemsData } from "./data/menu";
import MenuCard from "./components/MenuCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Logo from "./assets/pizzas_planet-logo.png"

import BgImg from "./assets/graphic-2d-colorful-wallpaper-with-grainy-gradients.jpg"

function App() {
  return (
    <div className="bg-yellow-100 min-h-screen py-10 px-6 sm:px-10 text-gray-800 backdrop-blur-lg" style={{ backgroundImage: `url(${BgImg})`, backgroundAttachment: "fixed" }}>
      {/* Header */}
    {/* <Header/> */}

<motion.h1
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="text-4xl sm:text-5xl font-bold text-[#22763A] text-center mb-16 underline decoration-yellow-500 flex flex-col items-center gap-4"
>
  <span>
    <img
      src={Logo}
      alt="Pizza Planet Logo"
      className="w-24 sm:w-32 h-auto mx-auto"
    />
  </span>
  Pizza Planet
</motion.h1>

      

      {/* 🍕 Pizza Section */}
      <section className="my-20">
      <div className="text-center">
      <motion.h2
  initial={{ opacity: 0, y: -30, rotate: -2 }}
  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
  className="relative text-3xl font-bold text-red-500 mb-8 text-center inline-block"
>
  Pizza Section
  <span className="absolute left-10 -bottom-1 transform -translate-x-1/2 w-1/2 h-1 bg-red-500 rounded-full"></span>
</motion.h2>
      </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pizzaData.map((pizza, index) => (
            <MenuCard key={index} {...pizza} />
          ))}
        </div>
      </section>

      {/* 🍔 Hot & Other Items */}
      <section className="mb-20">
      <div className="text-center">
      <motion.h2
  initial={{ opacity: 0, y: -30, rotate: -2 }}
  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
  className="relative text-3xl font-bold text-red-500 mb-8 text-center inline-block"
>
  Hot and Chats
  <span className="absolute left-10 -bottom-1 transform -translate-x-1/2 w-1/2 h-1 bg-red-500 rounded-full"></span>
</motion.h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...hotItemsData, ...menuData].map((menu, index) => (
            <MenuCard key={index} {...menu} />
          ))}
        </div>
      </section>

      {/* ❄️ Cold Items – Each as a Separate Section */}
      <section>
      <div className="text-center">
      <motion.h2
  initial={{ opacity: 0, y: -30, rotate: -2 }}
  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
  className="relative text-3xl font-bold text-red-500 mb-8 text-center inline-block"
>
  Cold Items
  <span className="absolute left-10 -bottom-1 transform -translate-x-1/2 w-1/2 h-1 bg-red-500 rounded-full"></span>
</motion.h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coldItemsData.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>
      </section>

          <Footer/>
    </div>
  );
}

export default App;

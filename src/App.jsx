import { pizzaData, menuData, hotItemsData, coldItemsData } from "./data/menu";
import MenuCard from "./components/MenuCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import Logo from "./assets/pizzas_planet-logo.png"

import BgImg from "./assets/graphic-2d-colorful-wallpaper-with-grainy-gradients.jpg"
import Toppings from "./assets/toppings.jpg"

function App() {
  return (
    <div className="bg-yellow-100 min-h-screen py-10 px-0 sm:px-8 md:px-12 text-gray-800 backdrop-blur-lg" style={{ backgroundImage: `url(${BgImg})`, backgroundAttachment: "fixed" }}>
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
  Pizzas Planet
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
      
<section className="px-2 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Two columns for MenuCards */}
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
      {pizzaData.map((pizza, index) => (
        <MenuCard key={index} {...pizza} />
      ))}
    </div>

    {/* Third column for Toppings */}
    {pizzaData[0].toppings && pizzaData[0].toppings.length > 0 && (
  <div
    className="group relative mt-2 rounded-2xl shadow-2xl overflow-hidden bg-cover bg-center cursor-pointer p-6 h-[360px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.015]"
    style={{ backgroundImage: `url(${Toppings})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition duration-300  rounded-2xl z-0" />

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full overflow-hidden">
      <div className="mb-4">
        <h3 className="relative text-3xl font-extrabold tracking-wide text-yellow-400 mb-2 drop-shadow inline-block">
          Extra Toppings
          <span className="absolute bg-red-800 -bottom-2 left-0 h-1 w-full"></span>
        </h3>
        <div className="flex justify-end text-sm text-gray-300 italic">
          Small / Medium
        </div>
      </div>

      <div className="overflow-y-auto pr-2 custom-scrollbar">
        <ul className="space-y-3 text-base text-white/90">
          {pizzaData[0].toppings.map((topping, index) => (
            <li
              key={index}
              className="flex justify-between border-b border-dashed border-green-400/40 pb-2"
            >
              <span className="font-medium tracking-tight text-lg italic">
                {topping.name}
              </span>
              <span className="font-semibold text-white">
                <span className="text-yellow-400 px-1">₹</span>
                {topping.price.small} /
                <span className="text-yellow-400 px-1">₹</span>
                {topping.price.medium}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}

  </div>
</section>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 px-2">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 px-2">
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

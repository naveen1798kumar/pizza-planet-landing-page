import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const MenuCard = ({ category, image, items, itemTypes, toppings }) => {
  const isPizza = category === "Pizza";
  const isWaffle = category === "Waffles"

  return (
<motion.div
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className={`group relative rounded-2xl shadow-xl overflow-hidden bg-cover bg-center text-white cursor-pointer ${
    isPizza ? "col-span-2" : ""
  }`}
  style={{ backgroundImage: `url(${image})` }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:backdrop-blur-sm transition-all duration-300" />
{isWaffle && (
  <div className="absolute top-2 right-2 bg-red-600/90 text-sm text-gray-200 px-3 py-1 rounded-md shadow-md italic backdrop-blur-sm">
    Extra Ice Cream{' '}
    <span className="font-semibold">
      <span className="text-yellow-500 px-1">₹</span>30
    </span>
  </div>
)}


      {/* Content */}
      <div className="relative p-4 lg:p-8 pb-12 font-sans">
        {/* Category Title */}
        {!itemTypes && (
  <div className="relative mb-10 text-center">
    <h2 className="text-3xl font-extrabold tracking-wide text-yellow-400 drop-shadow-md font-heading">
      {category}
    </h2>
    <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-16 h-1 bg-red-500 rounded-full"></span>
  </div>
)}


        {/* Menu Items */}
        {items && (
          <ul className="space-y-3 text-base text-white/90">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-dashed border-red-400/40 pb-2"
              >
                <span className="font-medium tracking-wide text-xl italic">{item.name} 
                  {item.qty ? <span className="bg-gray-50/60 text-black px-2 py-1 rounded-xl">( <span className="">{item.qty}</span> pcs )</span> : null} 
                  {item.offer ? <div className="mt-2 bg-gray-50/60 text-black px-2 py-1 rounded-xl">( {item.offer} )</div> : null}
                </span>
                <span className="font-semibold"><span className="text-yellow-400 px-1">₹</span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Pizza Item Types */}
        {itemTypes && (
          <div className="mt-8">
            <div className="flex flex-col md:flex-row gap-12 md:gap-8">
              {itemTypes.map((typeBlock, idx) => (
                <div key={idx} className="flex-1  md:mb-0">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-wide text-yellow-400">
                      {typeBlock.type}
                    </h3>
                    <span className="text-sm text-gray-300 italic">Small / Medium</span>
                  </div>
                  <ul className="space-y-2 text-base text-white/90">
                    {typeBlock.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between border-b border-dashed border-red-400/40 pb-2"
                      >
                        <span className="font-medium tracking-tight text-xl italic">{item.name}</span>
                        <span className="font-semibold text-white ">
                          <span className="text-yellow-400 px-1">₹</span>{item.price.small} /
                          <span className="text-yellow-400 px-1">₹</span>{item.price.medium}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>

            {/* Toppings Section */}

          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;

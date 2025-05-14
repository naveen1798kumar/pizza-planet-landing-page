import bgImage from "../assets/placeholder.png"
import Pizza from "../assets/pizza.jpg"

// 
import Waffles from "../assets/waffles.jpg"
import VadaPav from "../assets/vada-pav.jpg"
import Maggie from "../assets/maggie.jpg"
import Fries from "../assets/fries.jpg"
import Omelette from "../assets/omelette.jpg"

// 
import Starters from "../assets/starters.jpg"
import Burgers from "../assets/burgers.jpg"
import Momos from "../assets/momos.jpg"
import Warps from "../assets/wraps.jpg"
import HotDogs from "../assets/hot-dogs.jpg"
import Sandwich from "../assets/sandwich.jpg"

// 
import Beverages from "../assets/cold-menu/cold-beverages.jpg"
import Mojito from "../assets/cold-menu/mojito.jpg"
import IceCreamBowl from "../assets/cold-menu/ice-cream-bowls.jpg"
import Falooda from "../assets/cold-menu/falooda.jpg"
import Milkshake from "../assets/cold-menu/milkshake.jpg"
import Lassi from "../assets/cold-menu/lassi.jpg"



export const pizzaData = [
  {
    category: "Pizza",
    image: Pizza,
    itemTypes: [
      {
        type: "Veg Pizza",
        items: [
          { name: "Classic Margherita", price: { small: 99, medium: 200 } },
          { name: "Corn Cheese Pizza", price: { small: 120, medium: 250 } },
          { name: "Veggie Pizza", price: { small: 130, medium: 260 } },
          { name: "Mushroom Pizza", price: { small: 140, medium: 270 } },
          { name: "Spicy Paneer Pizza", price: { small: 150, medium: 280 } },
          { name: "Red Paaprrika Paneer Pizza", price: { small: 160, medium: 290 } },
          { name: "Hot and Spicy Pizza", price: { small: 170, medium: 300 } },
          { name: "Veg Loaded Pizza", price: { small: 180, medium: 310 } },
        ]
      },
      {
        type: "Non Veg Pizza",
        items: [
          { name: "Peri Peri Chicken Pizza", price: { small: 220, medium: 380 } },
          { name: "Corn and Peri Peri Chicken Pizza", price: { small: 190, medium: 350 } },
          { name: "BBQ Chicken Pizza", price: { small: 220, medium: 380 } },
          { name: "Tandoori Chicken Pizza", price: { small: 240, medium: 410 } },
          { name: "Spicy Chicken Pizza", price: { small: 240, medium: 410 } },
          { name: "Non Veg Loaded Pizza", price: { small: 269, medium: 449 } },
          { name: "Chicken Sausage Pizza", price: { small: 150, medium: 280 } },
          { name: "Schezwan Chicken Pizza", price: { small: 220, medium: 380 } },
          { name: "Chicken Golden Delight", price: { small: 190, medium: 320 } },
          { name: "Barbeque Chicken", price: { small: 200, medium: 330 } }
        ]
      }
    ],
    toppings: [
      { name: "Extra Cheese", price: { small : 40, medium : 50 } },
      { name: "Veggies", price: { small : 25, medium : 35 } },
      { name: "Chicken", price: { small : 40, medium : 50 } },
      { name: "Cheese Burst", price: { small : 50, medium : 60 } }
    ],
  }
];

export const menuData = [
  {
    category: "Waffles",
    image: Waffles,
    items: [
      { name: "Cookies and Cream", price: 99 },
      { name: "Bubblecum Crunchy", price: 99 },
      { name: "Belgium Milk Chocolate", price: 110 },
      { name: "Belgium White Chocolate", price: 110 },
      { name: "Belgium Dark Chocolate", price: 130 },
      { name: "Hazlenut Chocolate", price: 140 },
      { name: "Red Velvet White Chocolate", price: 150 },
      { name: "Red Velvet Dark Chocolate", price: 160 }
    ]
  },
  {
    category: "Vada Pav",
    image: VadaPav,
    items: [
      { name: "Classic Vada Pav", price: 59 },
      { name: "Cheese Vada Pav", price: 79 }
    ]
  },
  {
    category: "Maggie",
    image: Maggie,
    items: [
      { name: "Veg Maggie", price: 50 },
      { name: "Cheese Maggie", price: 70 },
      { name: "Egg Maggie", price: 60 },
      { name: "Peri Peri Paneer Maggie", price: 90 },
      { name: "Cheese Paneer Maggie", price: 110 },
      { name: "Chicken Maggie", price: 100 },
      { name: "Chicken Cheese Maggie", price: 120 }
    ]
  },
  {
    category: "Omelete",
    image: Omelette,
    items: [
      { name: "Bread Omelete", price: 50 },
      { name: "Cheese Bread Omelete", price: 70 },
      { name: "Pasta in Pink Sauce", price: 109 }
    ]
  },
  {
    category: "Fries",
    image: Fries,
    items: [
      { name: "Salted Fries", price: 70 },
      { name: "Salt and Pepper", price: 75 },
      { name: "Peri Peri Fries", price: 85 },
      { name: "Mexican Fries", price: 89 }
    ]
  },
];

export const hotItemsData = [
  {
    category: "Starters",
    image: Starters,
    items: [
      { name: "Smileys", price: 70 },
      { name: "Veg Spring Roll", price: 80 },
      { name: "Chicken Spring Roll", price: 80 },
      { name: "Chicken Nuggets", price: 90 },
      { name: "Chicken Popcorn", price: 100 }
    ]
  },
  {
    category: "Burgers",
    image: Burgers,
    items: [
      { name: "veg Burger", price: 80 },
      { name: "Paneer Burger", price: 130 },
      { name: "Chicken Burst Burger", price: 140 },
      { name: "Classic Chicken Burger", price: 100 },
      { name: "Egg Burger", price: 80 },
      { name: "Chicken Cheese Burger", price: 120 },
      { name: "Fried Chicken Burger", price: 149 },
      { name: "Peri Peri Fried Chicken Burger", price: 159 },
      { name: "Tandoorio Fried Chicken Burger", price: 159 }
    ]
  },
  {
    category: "Momos",
    image: Momos,
    items: [
      { name: "veg Momos", price: 90 },
      { name: "Paneer Momos", price: 120 },
      { name: "Chicken Momos", price: 100 },
      { name: "Corn and Cheese Momos", price: 110 },
      { name: "Peri Peri Chicken Momos", price: 120 }
    ]
  },
  {
    category: "Warps",
    image: Warps,
    items: [
      { name: "Grilled Veg Wrap", price: 99 },
      { name: "Grilled Paneer Wrap", price: 130 },
      { name: "Peri Peri Chicken Wrap", price: 140 },
      { name: "Chicken Nuggets Wrap", price: 140 },
      { name: "Egg Wrap", price: 115 }
    ]
  },
  {
    category: "Hot Dogs",
    image: HotDogs,
    items: [
      { name: "Chicken Hot Dog", price: 139 },
      { name: "Cheese Chicken Hot Dog", price: 159 }
    ]
  },
  {
    category: "Sandwich",
    image: Sandwich,
    items: [
      { name: "Grilled Veg Sandwich", price: 70 },
      { name: "Veg Cheese Sandwich", price: 90 },
      { name: "Corn Sandwich", price: 90 },
      { name: "Paneer Sandwich", price: 120 },
      { name: "Egg Sandwich", price: 90 },
      { name: "Chicken Sandwich", price: 130 },
      { name: "Panner Corn Cheese Sandwich", price: 140 },
      { name: "Chocolate Sandwich", price: 80 }
    ]
  }
];

export const coldItemsData = [
  {
    category: "Cold Beverages",
    image: Beverages,
    items: [
      { name: "Rose Milk", price: 50 },
      { name: "Badam Milk", price: 60 },
      { name: "Milo Milk", price: 70 },
      { name: "Cold Coffee", price: 80 }
    ]
  },
  {
    category: "Mojito",
    image: Mojito,
    items: [
      { name: "Virgin Mojito", price: 60 },
      { name: "Green Mint Mojito", price: 70 },
      { name: "Blue Curacao Mojito", price: 80 },
      { name: "Orange Mojito", price: 80 },
      { name: "Pineapple Mojito", price: 90 },
      { name: "Mango Mojito", price: 90 },
      { name: "Blueberry Mojito", price: 100 }
    ]
  },
  {
    category: "Ice Cream Bowl",
    image: IceCreamBowl,
    items: [
      { name: "Vanilla Ice Cream", price: 60 },
      { name: "Strawberry Ice Cream", price: 60 },
      { name: "Chocolate Ice Cream", price: 70 },
      { name: "Pista Ice Cream", price: 70 },
      { name: "Mango Ice Cream", price: 70 },
      { name: "Butter Scotch", price: 80 },
      { name: "Butter Current", price: 90 }
    ]
  },
  {
    category: "Falooda",
    image: Falooda,
    items: [
      { name: "Strawberry", price: 130 },
      { name: "Mango", price: 140 },
      { name: "Pista", price: 150 }
    ]
  },
  {
    category: "Milk Shakes",
    image: Milkshake,
    items: [
      { name: "Vanilla Milk Shake", price: 80 },
      { name: "Strawberry Milk Shake", price: 80 },
      { name: "Pista Milk Shake", price: 90 },
      { name: "Mango Milk Shake", price: 90 },
      { name: "Chocolate Milk Shake", price: 90 },
      { name: "Peanut Butter Shake", price: 90 },
      { name: "Butter Scotch Milk Shake", price: 90 },
      { name: "Black Current Milk Shake", price: 120 },
      { name: "Oreo Shake", price: 100 },
      { name: "Dark Fantasy Shake", price: 110 }
    ]
  },
  {
    category: "Lassi",
    image: Lassi,
    items: [
      { name: "Sweet Lassi", price: 50 },
      { name: "Strawberry Lassi", price: 70 },
      { name: "Pista Lassi", price: 70 },
      { name: "Mango Lassi", price: 80 },
      { name: "Butter Scotch Lassi", price: 80 },
      { name: "Black Current Lassi", price: 100 },
      { name: "Chocolate", price: 90 }
    ]
  }
];

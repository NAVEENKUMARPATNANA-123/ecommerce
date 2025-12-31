 import uuid from '../components/id/id_generator.tsx'
 interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description:string;
}

 export const products: Product[] = 
 [
  {
    id: uuid(),
    name: "Chicken Biryani",
    category: "biryani",
    img: "../assets/biryani/img_1.jpg",
    price: 160,
    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Mutton Biryani",
    category: "biryani",
    img: "../assets/biryani/img_2.jpg",
    price: 300,
        description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Hyderabadi Biryani",
    category: "biryani",
    img: "../assets/biryani/img_3.jpg",
    price: 200,    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Veg Biryani",
    category: "biryani",
    img: "../assets/biryani/img_4.jpg",
    price: 100,    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Egg Biryani",
    category: "biryani",
    img: "../assets/biryani/img_5.jpg",
    price: 120,    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Dum Biryani",
    category: "biryani",
    img: "../assets/biryani/img_6.jpg",
    price: 140,    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
  {
    id: uuid(),
    name: "Ambur Biryani",
    category: "biryani",
    img: "../assets/biryani/img_7.jpg",
    price: 140,    description:"Biryani is a mixed rice dish originating in South Asia, traditionally made with rice, meat (chicken, goat, beef) or seafood (prawns or fish), vegetables, and spices. It was created in Mughal-era India, though the precise date and place of origin are debated.[1] It is thought to derive from the Persian pilau rice dish."

  },
    {
    id: uuid(),
    name: "Classic Chicken Burger",
    category: "burger",
    img: "../assets/burger/img_1.jpg",
    price: 150,
    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "
  },
   {
    id: uuid(),
    name: "Cheese Burger",
    category: "burger",
    img: "../assets/burger/img_2.jpg",
    price: 160,    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "

  },
  {
    id: uuid(),
    name: "Veg Burger",
    category: "burger",
    img: "../assets/burger/img_3.jpg",
    price: 100,    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "

  },
   {
    id: uuid(),
    name: "Double Patty Burger",
    category: "burger",
    img: "../assets/burger/img_4.jpg",
    price: 200,    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "

  },
{
    id: uuid(),
    name: "Spicy Burger",
    category: "burger",
    img: "../assets/burger/img_5.jpg",
    price: 180,    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "

  },
{
    id: uuid(),
    name: "Crispy Burger",
    category: "burger",
    img: "../assets/burger/img_6.jpg",
    price: 160,    description:"A burger is a savory sandwich featuring a cooked patty (usually ground beef, but also turkey, veggie, etc.) nestled in a sliced bun, often with toppings like lettuce, tomato, onion, pickles, cheese, bacon, and condiments like ketchup, mustard, or mayo, creating a customizable, juicy, and satisfying meal popular worldwide. "

  },
   
 
  
  {
    id: uuid(),
    name: "Margherita Pizza",
    category: "pizza",
    img: "../assets/pizza/img_1.jpg",
    price: 100,
    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "
  },
   {
    id: uuid(),
    name: "Pepperoni Pizza",
    category: "pizza",
    img: "../assets/pizza/img_2.jpg",
    price: 140,    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "

  },
  {
    id: uuid(),
    name: "BBQ Chicken Pizza",
    category: "pizza",
    img: "../assets/pizza/img_3.jpg",
    price: 250,    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "

  },
   {
    id: uuid(),
    name: "Veggie Pizza",
    category: "pizza",
    img: "../assets/pizza/img_4.jpg",
    price: 120,    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "

  },
    {
    id: uuid(),
    name: "Cheese Burst Pizza",
    category: "pizza",
    img: "../assets/pizza/img_5.jpg",
    price: 200,    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "

  },
    {
    id: uuid(),
    name: "Paneer Pizza",
    category: "pizza",
    img: "../assets/pizza/img_6.jpg",
    price: 160,    description:"Pizza is a beloved Italian dish featuring a baked, flat dough base covered with tomato sauce, cheese (typically mozzarella), and various toppings like meats, vegetables, herbs, and spices, served hot as a savory pie or slices, known for its versatile flavors and textures from crispy crust to gooey cheese. "

  },
  {
    id: uuid(),
    name: "Coca Cola",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_1.jpg",
    price: 30,
    description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "
  },
   {
    id: uuid(),
    name: "Pepsi",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_2.jpg",
    price: 30,
        description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "

  },
  {
    id: uuid(),
    name: "Sprite",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_3.jpg",
    price: 30,    description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "

  },
   {
    id: uuid(),
    name: "Fanta",
    category: "cooldrinks",
    img: "/assets/cooldrinks/img_4.jpg",
    price: 30,    description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "

  },
   {
    id: uuid(),
    name: "Thums Up",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_5.jpg",
    price: 30,    description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "

  },
   {
    id: uuid(),
    name: "Mountain Dew",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_6.jpg",
    price: 30,    description:"A cooldrink (or soft drink) is a non-alcoholic, usually carbonated beverage with water, sweeteners (sugar, HFCS, substitutes) and flavorings (natural/artificial), often with caffeine, colors, and preservatives, offering a refreshing, sweet, fizzy experience, distinct from plain water or hard (alcoholic) drinks, with popular examples including cola, lemonade, and fruit-flavored sodas. "

  },
];


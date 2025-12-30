 import uuid from '../components/id/id_generator.tsx'
 interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
}

 export const products: Product[] = 
 [
  {
    id: uuid(),
    name: "Chicken Biryani",
    category: "biryani",
    img: "../assets/biryani/img_1.jpg",
    price: 160,
  },
  {
    id: uuid(),
    name: "Mutton Biryani",
    category: "biryani",
    img: "../assets/biryani/img_2.jpg",
    price: 300,
  },
  {
    id: uuid(),
    name: "Hyderabadi Biryani",
    category: "biryani",
    img: "../assets/biryani/img_3.jpg",
    price: 200,
  },
  {
    id: uuid(),
    name: "Veg Biryani",
    category: "biryani",
    img: "../assets/biryani/img_4.jpg",
    price: 100,
  },
  {
    id: uuid(),
    name: "Egg Biryani",
    category: "biryani",
    img: "../assets/biryani/img_5.jpg",
    price: 120,
  },
  {
    id: uuid(),
    name: "Dum Biryani",
    category: "biryani",
    img: "../assets/biryani/img_6.jpg",
    price: 140,
  },
  {
    id: uuid(),
    name: "Ambur Biryani",
    category: "biryani",
    img: "../assets/biryani/img_7.jpg",
    price: 140,
  },
    {
    id: uuid(),
    name: "Classic Chicken Burger",
    category: "burger",
    img: "../assets/burger/img_1.jpg",
    price: 150,
  },
   {
    id: uuid(),
    name: "Cheese Burger",
    category: "burger",
    img: "../assets/burger/img_2.jpg",
    price: 160,
  },
  {
    id: uuid(),
    name: "Veg Burger",
    category: "burger",
    img: "../assets/burger/img_3.jpg",
    price: 100,
  },
   {
    id: uuid(),
    name: "Double Patty Burger",
    category: "burger",
    img: "../assets/burger/img_4.jpg",
    price: 200,
  },
{
    id: uuid(),
    name: "Spicy Burger",
    category: "burger",
    img: "../assets/burger/img_5.jpg",
    price: 180,
  },
{
    id: uuid(),
    name: "Crispy Burger",
    category: "burger",
    img: "../assets/burger/img_6.jpg",
    price: 160,
  },
   
 
  
  {
    id: uuid(),
    name: "Margherita Pizza",
    category: "pizza",
    img: "../assets/pizza/img_1.jpg",
    price: 100,
  },
   {
    id: uuid(),
    name: "Pepperoni Pizza",
    category: "pizza",
    img: "../assets/pizza/img_2.jpg",
    price: 140,
  },
  {
    id: uuid(),
    name: "BBQ Chicken Pizza",
    category: "pizza",
    img: "../assets/pizza/img_3.jpg",
    price: 250,
  },
   {
    id: uuid(),
    name: "Veggie Pizza",
    category: "pizza",
    img: "../assets/pizza/img_4.jpg",
    price: 120,
  },
    {
    id: uuid(),
    name: "Cheese Burst Pizza",
    category: "pizza",
    img: "../assets/pizza/img_5.jpg",
    price: 200,
  },
    {
    id: uuid(),
    name: "Paneer Pizza",
    category: "pizza",
    img: "../assets/pizza/img_6.jpg",
    price: 160,
  },
  {
    id: uuid(),
    name: "Coca Cola",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_1.jpg",
    price: 30,
  },
   {
    id: uuid(),
    name: "Pepsi",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_2.jpg",
    price: 30,
  },
  {
    id: uuid(),
    name: "Sprite",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_3.jpg",
    price: 30,
  },
   {
    id: uuid(),
    name: "Fanta",
    category: "cooldrinks",
    img: "/assets/cooldrinks/img_4.jpg",
    price: 30,
  },
   {
    id: uuid(),
    name: "Thums Up",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_5.jpg",
    price: 30,
  },
   {
    id: uuid(),
    name: "Mountain Dew",
    category: "cooldrinks",
    img: "../assets/cooldrinks/img_6.jpg",
    price: 30,
  },
];


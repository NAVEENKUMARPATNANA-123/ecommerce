import { useState } from "react";
import axios from "axios";
import "./addFood.css";
import Footer from "../components/footer/footer.tsx";
import Navbar from "../components/navbar/navbar.tsx";
interface Product {
  name: string;
  category: string;
  img: string;
  price: number;
  description: string;
}

function AddFood(): React.JSX.Element {
  const [form, setForm] = useState<Product>({
    name: "",
    category: "", 
    img: "",
    price: 0,
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: name === "price" ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:3000/api/products", form);
      setMessage("✅ Product added successfully!");
      setForm({ name: "", category: "", img: "", price: 0, description: "" });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
   
    <div className="add-food-container">
      <h2>Add New Food Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required  placeholder="Name of the Food"/>
        </label>

        <label>
          Category:
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">Select category of food</option>
            <option value="biryani">Biryani</option>
            <option value="burger">Burger</option>
            <option value="pizza">Pizza</option>
            <option value="cooldrinks">Cool Drinks</option>
          </select>
        </label>

        <label>
          Image URL:
          <input type="text" name="img" value={form.img} onChange={handleChange} required placeholder="Image Url" />
        </label>

        <label>
          Price:
          <input type="number" name="price" value={form.price} onChange={handleChange} min={0} required  />
        </label>

        <label>
          Description:
          <textarea name="description" value={form.description} onChange={handleChange} required  
          placeholder="Detailed Description"/>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Food"}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
    
    </>
  );
}

export default AddFood;

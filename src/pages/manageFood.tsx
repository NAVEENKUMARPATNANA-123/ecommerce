import { useEffect, useState } from "react";
import axios from "axios";
import "./manageFood.css";
import Navbar from "../components/navbar/navbar.tsx";
import Footer from "../components/footer/footer.tsx";

interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  price?: number;
  description: string;
}

function ManageFood(): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Product>>({});


  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this food item?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setProducts(products.filter((item) => item.id !== id));
      alert("Food deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete food.");
    }
  };


  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({ ...product });
  };

 
  const handleSave = async (id: string) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/products/${id}`, editForm);
      setProducts(products.map((p) => (p.id === id ? res.data : p)));
      setEditingId(null);
      setEditForm({});
      alert("Food updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update food.");
    }
  };

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <>
     
    <div className="manage-food-page">
      <h1>🍽️ Manage Food Items</h1>
      <div className="food-grid">
        {products.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.img} alt={item.name} />

            {editingId === item.id ? (
              <div className="edit-form">
                <input type="text" value={editForm.name} placeholder="Name" onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                <input  type="text" value={editForm.category}
                  placeholder="Category"
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                />
                <input
                  type="number"
                  value={editForm.price}
                  placeholder="Price"
                  onChange={(e) => setEditForm({ ...editForm, price: Number(e.target.value) })}
                />
                <input
                  type="text"
                  value={editForm.img}
                  placeholder="Image URL"
                  onChange={(e) => setEditForm({ ...editForm, img: e.target.value })}
                />
                <textarea
                  value={editForm.description}
                  placeholder="Description"
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
                <button onClick={() => handleSave(item.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <>
                <h3>{item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <div className="card-buttons">
                  <button onClick={() => handleEdit(item)} className="update-btn">
                    Update
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
}

export default ManageFood;

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  // ✅ Backend URL (Spring Boot REST API)
  const API_URL = "http://localhost:8080/products";

  // 📌 Fetch all products on page load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // 📌 Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // 📌 Handle form submit (Add Product)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", category: "", price: "", quantity: "" });
        fetchProducts();
      }
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // 📌 Delete product by ID
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // 📌 Update product quantity
  const  handleUpdateQuantity = async (id, newQuantity) => {
    try {
      await fetch(`${API_URL}/${id}?quantity=${newQuantity}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: newQuantity }),
      });
      fetchProducts();
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  return (
    <div className="container">
      <h1>Inventory Management System</h1>

      {/* Add Product Form */}
      <div className="form-container">
        <h2>Add New Product</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={formData.name} onChange={handleChange} required />

          <label htmlFor="category">Category</label>
          <input id="category" type="text" value={formData.category} onChange={handleChange} required />

          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" value={formData.quantity} onChange={handleChange} required />

          <label htmlFor="price">Price</label>
          <input id="price" type="number" value={formData.price} onChange={handleChange} required />

          <button type="submit">Add Product</button>
        </form>
      </div>

      {/* Inventory Table */}
      <div>
        <h2>Current Inventory</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th> <th>Name</th> <th>Category</th> <th>Price</th> <th>Quantity</th> <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>
                    <button onClick={() => handleDelete(p.id)}>Delete</button>
                    <button onClick={() => {
                      const newQty = prompt("Enter new quantity:", p.quantity);
                      if (newQty) handleUpdateQuantity(p.id, newQty);
                    }}>Update Qty</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No products available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

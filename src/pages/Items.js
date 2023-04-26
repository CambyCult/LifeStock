import "../style/Items.css";
import axios from "axios";
import { useEffect, useState } from "react";

export function Items() {
  const [items, setItems] = useState([]);

  const handleItems = () => {
    axios.get("http://localhost:3000/items.json").then((response) => {
      setItems(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/items.json", params).then((response) => {
      const newItem = response.data;
      setItems([...items, newItem]);
      event.target.reset();
      handleItems();
    });
  };

  useEffect(handleItems, []);

  return (
    <div className="items_container">
      
      
          <div className="items_interface" id="card">
          <form onSubmit={handleSubmit}>
          <h3>ITEMS → INVENTORY:</h3>
            <label className="items_label">Item Name:</label>
            <input type="text" name="name"></input>
            <label className="items_label">Minimum Quantity:</label>
            <input type="number" name="minimum"></input>

            <button type="submit">Submit</button>
          </form>
          </div>
        <div className="items_display" id="card">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Minimum</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.minimum}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
}
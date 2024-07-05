import React, { useEffect, useState } from 'react';
import { getData, postData } from './ApiService';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getData();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newItem) {
      try {
        const addedItem = await postData({ item: newItem });
        setItems([...items, addedItem]);
        setNewItem('');
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
  };

  return (
    <div>
      <h1>React App with GET and POST API</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


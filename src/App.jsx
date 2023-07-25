import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import React from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => items.id !== id));
  }
  return (
    <div>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default App;

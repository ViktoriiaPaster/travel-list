import './App.css';
import { useState } from "react";
import {Logo} from './Logo';
import {Form} from './Form';
import {List} from './List';
import {Stats} from './Stats';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id ))
  }

  function handleTogglePacked(id) {
    setItems((items) => items.map((item) => item.id === id  ? {...item, packed: !item.packed} : item))
  }

  function hangleCrearList() {
    let confirmed = window.confirm('Are you sure you want to delete all items?');

    if(confirmed) {
      setItems([])
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem}/>
      <List items={items} onDeleteItems={handleDeleteItem} onToggle={handleTogglePacked} onClear={hangleCrearList}/>
      <Stats items={items} />
    </div>
  );
}

export default App;

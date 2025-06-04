import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import { Item } from "./types/Item";

function App() {
const [list, setList] = useState<Item[]>([])

const handleAddItem = (item : Item) => {
    setList((previous) => [...previous, item])
}

const handleDeleteItem = (id: string) => {
  setList((previous) => previous.filter((item: Item) => item.id !== id))
}

return (
  <div>
    <ToDoItem handleAddItem={handleAddItem}/>
    {list.map((item: Item) => 
    <div>
      <p>{item.text} {item.time} {item.date}</p> 
      <button onClick={() => handleDeleteItem(item.id)}>X</button>
      </div>)}
  </div>
  );
}

export default App;

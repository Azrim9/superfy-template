import { Item } from "@/types/Item";
import { generateUUIDv4 } from "@/utils/generateUuidV4";
import { useState } from "react";

interface ToDoItemProps {
  handleAddItem: (item: Item) => void
}

function ToDoItem({handleAddItem} : ToDoItemProps) {
const [text, setText] = useState<string>("")
const [time, setTime] = useState<string>("")
const [date, setDate] = useState<string>("")


const item = {
  text,
  time,
  date
}

return (
  <div>
    <input type="text" onChange={(e) =>setText(e.target.value)} />
    <input type="time" onChange={(e) =>setTime(e.target.value)} />
    <input type="date" onChange={(e) =>setDate(e.target.value)} />
    <button onClick={()=>handleAddItem({...item, id:generateUUIDv4()})}> Add </button>
  </div>
  );
}

export default ToDoItem;

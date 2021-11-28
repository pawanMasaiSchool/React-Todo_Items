import TodoItem from "./TodoItem";
import styling from "./Todo.module.css";
import { useState } from "react";
import Styles from "./TodoItem.module.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inp, setInp] = useState("");
  const handleChange = (val) => {
    setInp(val.target.value);
  };
  const handleAddTask = () => {
    saveTodos(inp);
  };
  const saveTodos = (inpTitle) => {
    const payload = {
      title: inpTitle,
      status: "False"
    };
    if (inpTitle !== "") {
      setTodos([...todos, payload]);
    }
  };
  return (
    <div className={styling.todoDiv}>
      <h1>TODO LIST</h1>
      <input
        value={inp}
        onChange={handleChange}
        placeholder="Write Your Task"
      />
      <br />
      <br />
      <button onClick={handleAddTask}>ADD</button>
      {todos.map((item) => (
        <TodoItem
          title={item.title}
          status={item.status}
          className={Styles.item}
        />
      ))}
    </div>
  );
}

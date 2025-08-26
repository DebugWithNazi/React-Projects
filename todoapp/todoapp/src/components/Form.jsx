import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        placeholder="Enter a task"
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
}

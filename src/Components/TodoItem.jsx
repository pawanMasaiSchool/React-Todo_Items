import styling from "./TodoItem.module.css";

export default function TodoItem({ title, status }) {
  return (
    <>
      <br />
      <br />
      <span className={styling.item}>
        Title: {title}, Status: {status}
      </span>
    </>
  );
}

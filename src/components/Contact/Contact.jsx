import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>👤 {name}</p>
      <p className={css.text}>📞 {number}</p>
      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;

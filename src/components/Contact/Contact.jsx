import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li className={css.item}>
      <p className={css.text}>👤 {name}</p>
      <p className={css.text}>📞 {number}</p>
      <button className={css.btn}>Delete</button>
    </li>
  );
};

export default Contact;

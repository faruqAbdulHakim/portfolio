import styles from './ContactItem.module.css';

const ContactItem = (props) => {
  return (
    <li>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className={styles.contact_item}
      >
        <props.icon className={styles.contact_item_icon} />
        <span className={styles.contact_item_text}>{props.name}</span>
      </a>
    </li>
  );
};

export default ContactItem;

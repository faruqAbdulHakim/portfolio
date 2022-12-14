import ContactItem from './ContactItem';
import styles from './ContactList.module.css';

const ContactList = (props) => {
  const contactItems = props.items.map((item) => (
    <ContactItem
      key={item.name}
      name={item.name}
      desc={item.desc}
      icon={item.icon}
      url={item.url}
    />
  ));

  return <ul className={styles.contact_list}>{contactItems}</ul>;
};

export default ContactList;

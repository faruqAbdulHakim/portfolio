import styles from './Contact.module.css';
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineInstagram,
} from 'react-icons/ai';
import ContactList from '../../components/Contact/ContactList';

const contactItemsList = [
  {
    name: 'LinkedIn',
    desc: 'LinkedIn',
    icon: AiOutlineLinkedin,
    url: 'https://www.linkedin.com/in/faruq-abdul-hakim-1aa6231bb/',
  },
  {
    name: 'Instagram',
    desc: 'Instagram',
    icon: AiOutlineInstagram,
    url: 'https://www.instagram.com/faruq_a.h/',
  },
  {
    name: 'Email',
    desc: 'Email me',
    icon: AiOutlineMail,
    url: 'mailto:faruqabdulhakim2001@gmail.com',
  },
];

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <ContactList items={contactItemsList} className={styles.contact_list} />
    </div>
  );
};

export default Contact;

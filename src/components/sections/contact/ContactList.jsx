import getContactList from '@/data/getContactList';
import ContactItem from './ContactItem';

const ContactList = () => {
  const contactList = getContactList();

  return (
    <div className="space-y-6">
      {contactList.map((contact) => (
        <ContactItem key={contact} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;

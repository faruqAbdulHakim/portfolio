import { getContactList } from '@/data/getContactList';
import ContactItem from './contact-item';

export default async function ContactList() {
  const contacts = getContactList();

  return (
    <ul className='space-y-6'>
      {contacts.map((contact) => (
        <ContactItem key={contact.name} contact={contact} />
      ))}
    </ul>
  );
}

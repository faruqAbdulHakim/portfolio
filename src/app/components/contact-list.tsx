import { getContactList } from '@/data';
import ContactItem from './contact-item';

export default async function ContactList() {
  const contacts = await getContactList();

  return (
    <ul className='space-y-6'>
      {contacts.map((contact) => (
        <ContactItem key={contact.name} contact={contact} />
      ))}
    </ul>
  );
}

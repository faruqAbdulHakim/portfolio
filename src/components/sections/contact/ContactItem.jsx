import MyIcon from '@/components/icon/MyIcon';
import ContactCopyButton from './ContactCopyButton';

/**
 *
 * @param {{
 *  contact: {
 *    name: string;
 *    content: string;
 *    Icon: import('react-icons').IconType;
 *  }
 * }} param0
 * @returns
 */
const ContactItem = ({ contact }) => {
  const { name, content, Icon } = contact;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <MyIcon Icon={Icon} />
        <div>
          <p className="font-semibold text-base">{name}</p>
          <p className="font-normal text-sm leading-snug">{content}</p>
        </div>
      </div>
      <ContactCopyButton content={content} />
    </div>
  );
};

export default ContactItem;

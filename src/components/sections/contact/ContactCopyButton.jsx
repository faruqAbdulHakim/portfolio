'use client';

/**
 *
 * @param {{ content: string; }} param0
 * @returns
 */
const ContactCopyButton = ({ content }) => {
  const copyHandler = () => {
    navigator.clipboard.writeText(content);
    alert('Coppied to clipboard');
  };

  return (
    <button
      type="button"
      className="font-medium text-base underline sm:no-underline hover:underline"
      onClick={copyHandler}
    >
      Copy
    </button>
  );
};

export default ContactCopyButton;

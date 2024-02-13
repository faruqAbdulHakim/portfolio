'use client';

const ExperienceViewDetailsButton = () => {
  const buttonClickHandler = () => {
    alert('Not Implemented Yet');
  };

  return (
    <button
      type="button"
      className="font-medium text-base underline sm:no-underline hover:underline whitespace-nowrap"
      onClick={buttonClickHandler}
    >
      View details
    </button>
  );
};

export default ExperienceViewDetailsButton;

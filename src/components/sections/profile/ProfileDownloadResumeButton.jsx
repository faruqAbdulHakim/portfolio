'use client';

const ProfileDownloadResumeButton = () => {
  const buttonClickHandler = () => {
    fetch('/resume.pdf', {
      method: 'GET',
    }).then((response) => {
      if (!response.ok) return;
      response.blob().then((value) => {
        const url = window.URL.createObjectURL(value);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        link.click();
      });
    });
  };

  return (
    <button
      className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-sm hover:brightness-95"
      onClick={buttonClickHandler}
    >
      Download Resume
    </button>
  );
};

export default ProfileDownloadResumeButton;

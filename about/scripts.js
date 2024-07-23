document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('.email-link');
  const popup = document.getElementById('popup');

  if (emailLink) {
    emailLink.addEventListener('click', (event) => {
      event.preventDefault();
      const email = emailLink.getAttribute('data-email');
      copyToClipboard(email);
      showPopup();
    });
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function showPopup() {
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
    }, 2000);
  }
});

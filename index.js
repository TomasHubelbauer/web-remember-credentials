window.addEventListener('load', () => {
  const authForms = document.querySelectorAll('.authForm');
  for (const authForm of authForms) {
    authForm.addEventListener('submit', () => {
      event.preventDefault();
    });
  }
});

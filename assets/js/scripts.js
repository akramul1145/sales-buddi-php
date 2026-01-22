
  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const icon = button.querySelector('.icon');

      item.classList.toggle('active');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });


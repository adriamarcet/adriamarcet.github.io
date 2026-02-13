if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');

    menu?.addEventListener('click', () => {
      const isExpanded = menu.getAttribute('aria-expanded') === 'true';
      menu.setAttribute('aria-expanded', String(!isExpanded));
    });
  });
}
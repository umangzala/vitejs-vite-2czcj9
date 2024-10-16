import './style.css';
// Example for incrementing cart count
// Example JS for future enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Accessibility: Focus state management
  const links = document.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('focus', () => {
      link.style.outline = '2px solid #1a73e8';
    });
    link.addEventListener('blur', () => {
      link.style.outline = 'none';
    });
  });

  // Function to handle any future cart updates (example placeholder)
  const cart = document.querySelector('.cart-count');
  cart.addEventListener('click', () => {
    alert('You have 10 items in your cart.');
  });
});

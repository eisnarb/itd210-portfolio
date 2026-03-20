const mobileNav = document.querySelector('.mobileNav');
const navLinks = document.querySelector('.navLinks');

mobileNav.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
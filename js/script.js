//Tailwind mobile navigation toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const isOpen = nav.dataset.open === 'true';

  if(isOpen) {
    //When function runs while menu is open
    //removes the open class styles, and restores
    //closed styling
    nav.classList.remove('max-h-[700px]', 'opacity-100', 'translate-y-0', 'py-4');
    nav.classList.add('max-h-0', 'opacity-0', '-translate-y-1.5');
    nav.dataset.open = 'false';
  } else {
    //When function runs while menu is closed
    //Applys open class styles
    nav.classList.remove('max-h-0', 'opacity-0', '-translate-y-1.5');
    nav.classList.add('max-h-[700px]', 'opacity-100', 'translate-y-0', 'py-4');
    nav.dataset.open = 'true';
  }
}
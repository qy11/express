const mask = document.querySelector('.mask');
const menuBtn = document.querySelector('#side-menu-toggle');
const sideDrawer = document.querySelector('.mobile-nav');

mask.addEventListener('click', maskClickHandler);
menuBtn.addEventListener('click', menuToggleClickHandler);

function maskClickHandler() {
  mask.style.display = 'none';
  sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
  mask.style.display = 'block';
  sideDrawer.classList.add('open');
}
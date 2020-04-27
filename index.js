const hamburger = document.getElementsByClassName('nav__hamburger');
const sidebarNav = document.getElementsByClassName('sidebar-nav');
const menus = document.querySelectorAll('.menu');

function showSidebarNav() {
  sidebarNav[0].classList.remove('hidden');
}

function hideMenus() {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
  });
}

hamburger[0].addEventListener('click', (event) => {
  event.stopPropagation();
  showSidebarNav();
});

document.body.addEventListener('click', hideMenus);

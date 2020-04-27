const menus = document.querySelectorAll('.menu');
const hero = document.getElementsByClassName('hero');

function hideMenus() {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
  });
}

document.body.addEventListener('click', hideMenus);

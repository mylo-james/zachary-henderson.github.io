const menus = document.querySelectorAll('.menu');

function hideMenus() {
  menus.forEach((menu) => {
    menu.classList.add('hidden');
  });
}

document.body.addEventListener('click', hideMenus);
